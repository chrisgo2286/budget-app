import { useState, useEffect } from 'react';
import EditEntryFields from "./editEntryFields";
import { useLocation } from "react-router-dom"
import { getCategories } from "../../misc/apiCalls";
import "../newEntry/entryDetail.css"
import Button from "../miscComponents/button/button";
import { compileCategoryNames } from '../../misc/miscFunctions';

export default function EditEntry () {
    
    const entry = useLocation().state
    const [ fields, setFields ] = useState({
        category: entry.category,
        amount: entry.amount,
        date: entry.date
    })
    const [ categories, setCategories ] = useState([])
    const [ categoryNames, setCategoryNames ] = useState([])

    useEffect(() => {
        getCategories()
        .then((data) => {
            setCategories(data);
            const names = compileCategoryNames(data)
            setCategoryNames(names)
        })
    },[])

    function saveEntry () {
        console.log("Save Entry Clicked")
    }

    return (
        <div className='entry-detail'>
            <EditEntryFields
                categories={ categories }
                categoryNames={ categoryNames } 
                fields={ fields } 
                setFields={ setFields } />
            <Button
                onClick={ saveEntry }
                label='Save' />
        </div>
    )
}