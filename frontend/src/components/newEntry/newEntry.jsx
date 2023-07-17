import { useState, useEffect } from "react";
import NewEntryFields from "./newEntryFields";
import { getCategories, postEntries } from "../../misc/apiCalls";
import { compileCategoryNames, getCategoryID } from "../../misc/miscFunctions";
import Button from "../miscComponents/button/button";

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
        let id;
        if( fields.category === '') {
            id = getCategoryID(categoryNames[0], categories)
        } else {
            id = getCategoryID(fields.category, categories)
        }
        console.log(id)
        const newFields = { ...fields, category: id }

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