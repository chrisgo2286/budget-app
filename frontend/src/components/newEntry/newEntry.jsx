import { useState, useEffect } from "react";
import NewEntryFields from "./newEntryFields";
import { getCategories, postEntries } from "../../misc/apiCalls";
import { compileCategoryNames, convertCategoryNameToID } from "../../misc/miscFunctions";
import Button from "../miscComponents/button/button";
import "./newEntry.css"

export default function NewEntry () {
    
    const [ fields, setFields ] = useState({
        category: '',
        amount: '',
        date: ''
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
        const id = convertCategoryNameToID(fields.category, categories)
        const newFields = { ...fields, category: id, owner: '1' }

        postEntries(newFields)
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <div className='new-entry-page'>
            <NewEntryFields
                categories={ categoryNames } 
                fields={ fields } 
                setFields={ setFields } />
            <Button
                onClick={ saveEntry }
                label='Save' />
        </div>
    )
}