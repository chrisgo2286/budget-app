import { useState } from 'react';
import { patchBudgetItem } from '../../misc/apiCalls';
import './budgetItem.css';

export default function BudgetItem ({ data }) {
    const [ budgetItem, setBudgetItem ] = useState({
        owner: 1, //Need to pull owner id here
        category: data.category_id,
        amount: data.budget
    })

    function handleChange (event) {
        const value = event.target.value;
        const newBudgetItem = { ...budgetItem, 'amount': value }
        setBudgetItem(newBudgetItem)
    }

    function handlePatch () {
        patchBudgetItem(data.id, budgetItem)
    }

    return (
        <div className='budget-item'>
            <div className='budget-item-header'>
                <div className='bar-label-actual'>{ data.actual }</div>
                <div className='budget-item-category'>{ data.category }</div>
                <input 
                    name={ data.category } 
                    value={ budgetItem.amount }
                    onChange={ handleChange } 
                    onBlur={ handlePatch }/>
            </div>
            <div className='budget-item-bar'>
                <div className='bar-filled' style={{width: data.percent}}></div>
            </div>
        </div>
    
    )
}