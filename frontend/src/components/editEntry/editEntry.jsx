import { useState, useEffect } from 'react';
import EntryFields from "../newEntry/entryFields";
import { useLocation } from "react-router-dom"
import { getCategories } from "../../misc/apiCalls";
import { compileCategoryNames, convertCategoryNameToID } from "../../misc/miscFunctions";
import "../newEntry/entryDetail.css"
import Button from "../miscComponents/button/button";

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
            const categoryNames = compileCategoryNames(data)
            setCategories(data);
            setCategoryNames(categoryNames);
        })
    },[])

    function saveEntry () {
        console.log("Save Entry Clicked")
    }

    console.log(fields)
    return (
        <div className='entry-detail'>
            <EntryFields
                categories={ categoryNames } 
                fields={ fields } 
                setFields={ setFields } />
            <Button
                onClick={ saveEntry }
                label='Save' />
        </div>
    )
}