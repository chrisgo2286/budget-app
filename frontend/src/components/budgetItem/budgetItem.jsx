import './budgetItem.css';

export default function BudgetItem ({ budgetItem }) {
    const { budget, actual, category, percent } = budgetItem
    return (
        <div className='budget-item'>
            <div className='budget-item-header'>{ category }</div>
            <div className='budget-item-bar'>
                <div className='bar-filled' style={{width: percent}}></div>
                <div className='bar-label-actual'>{ actual }</div>
                <div className='bar-label-budget'>{ budget }</div>
            </div>

        </div>
    
    )
}