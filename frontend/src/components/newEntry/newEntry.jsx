import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NewEntryFields from "./newEntryFields";
import { getCategories, postEntries } from "../../misc/apiCalls";
import { convertCategoryNameToID } from "../../misc/miscFunctions";
import { compileCategoryNames } from "../../misc/miscFunctions";
import Button from "../miscComponents/button/button";
import "./entryDetail.css"

export default function NewEntry () {
    
    const navigate = useNavigate();
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
            const names = compileCategoryNames(data)
            setCategories(data)
            setCategoryNames(names);
        })            
    },[])

    function saveEntry () {
        const id = convertCategoryNameToID(fields.category, categories)
        const newFields = { ...fields, category: id, owner: '1' }

        postEntries(newFields)
        .then((data) => {
            console.log(data)
        })

        navigate('/newEntry')
        
        const emptyFields = {
            category: '',
            amount: '',
            date: ''
        }
        setFields(emptyFields)
    }

    return (
        <div className='entry-detail'>
            <NewEntryFields 
                categoryNames={ categoryNames } 
                fields={ fields } 
                setFields={ setFields } />
            <Button
                onClick={ saveEntry }
                label='Save' />
        </div>
    )
}