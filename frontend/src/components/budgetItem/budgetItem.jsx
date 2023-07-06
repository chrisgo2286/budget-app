import './budgetItem.css';

export default function BudgetItem ({ title }) {
    return (
        <div className='budget-item'>
            <div className='budget-item-header'>{ title }</div>
            <div className='budget-item-bar'>
                <div className='bar-filled'></div>
            </div>

        </div>
    
    )
}