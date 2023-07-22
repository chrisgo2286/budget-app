import { useState } from 'react';
import EditEntryFields from "./editEntryFields";
import { useLocation, useNavigate } from "react-router-dom"
import { patchEntries } from "../../misc/apiCalls";
import { compileCategoryNames } from "../../misc/miscFunctions";
import "../newEntry/entryDetail.css"
import Button from "../miscComponents/button/button";

export default function EditEntry () {
    
    const navigate = useNavigate()
    const { entry, categories } = useLocation().state
    const [ fields, setFields ] = useState({
        category: entry.category,
        amount: entry.amount,
        date: entry.date
    })

    function saveEntry () {
        patchEntries(entry.id, fields)
        .then((data) => {
            console.log(data)
        })
        .then(() => navigate('/expenses'))
    }

    return (
        <div className='entry-detail'>
            <EditEntryFields
                categories={ categories }
                categoryNames={ compileCategoryNames(categories) } 
                fields={ fields } 
                setFields={ setFields } />
            <Button
                onClick={ saveEntry }
                label='Save' />
        </div>
    )
}