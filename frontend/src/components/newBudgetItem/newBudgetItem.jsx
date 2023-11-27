import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { addBudgetItem } from "../../misc/apiCalls"

export default function NewBudgetItem ({ categories, setUpdated }) {
    const [ fields, setFields ] = useState({
        owner: 1, //NEED TO UPDATE TO CURRENT USER ID
        category: '',
        amount: ''
    })
    const navigate = useNavigate();

    function handleChange (event) {
        const { name, value } = event.target
        const newFields = { ...fields, [name]: value}
        setFields(newFields)
    }

    function handleSubmit () {
        addBudgetItem(fields)
        const newFields = { category: '', amount: '' }
        setFields(newFields)
        setUpdated(true)
    }

    return (
        <div className='new-budget-item'>
            <select name='category' onChange={ handleChange }>
                <option value={ fields.category }>{ fields.category }</option>
                { categories.map((category) => (
                    <option key={ category.id } value={ category.id }>{ category.name }</option>
                ))}
            </select>
            <input 
                name='amount' 
                value={ fields.amount } 
                onChange={ handleChange }/>
            <span onClick={ handleSubmit }>+</span>
        </div>
    )
}