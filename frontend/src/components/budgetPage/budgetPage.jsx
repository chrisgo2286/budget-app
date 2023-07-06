import Budget from "../budget/budget"
import './budgetPage.css';

export default function BudgetPage () {
        
    return (
        <div className='budget-page'>
            <Budget />
            <div className='summary-item1'>
                BLOCK 1
            </div>
            <div className='summary-item2'>
                BLOCK 2
            </div>
            <div className='summary-item3'>
                BLOCK 3
            </div>
        </div>
    )
}