import './budgetItem.css';

export default function BudgetItem ({ budgetItem, categories }) {
    const { category, amount } = budgetItem
    return (
        <div className='budget-item'>
            <div className='budget-item-header'>{ budgetItem.category }</div>
            <div className='budget-item-bar'>
                <div className='bar-filled' style={{width: '60%'}}></div>
            </div>

        </div>
    
    )
}