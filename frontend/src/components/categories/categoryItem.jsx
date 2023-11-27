import { useState } from "react"

export default function CategoryItem ({ category }) {
    const [ fields, setFields ] = useState({
        id: category.id,
        name: category.name,
        type: category.type
    })
    
    function handleChange (event) {
        const { name, value } = event.target
        const newFields = { ...fields, [name]: value }
        setFields(newFields)
    }

    function handlePatch () {
        console.log("PATCH CATEGORY")
    }

    function handleOptions () {
        if (fields.type === 'Expense') {
            return (<option value="Income">Income</option>)
        } else {
            return (<option value="Expense">Expense</option>)
        }
    }

    return (
        <div className="category-item">
            <input 
                name="name" 
                value={ fields.name }
                onChange={ handleChange } 
                onBlur={ handlePatch }/>
            <select name="type">
                <option 
                    value={ fields.type } 
                    selected="true">{ fields.type }</option>
                { handleOptions() }
            </select>
            <span>DELETE</span>
        </div>
    )
}