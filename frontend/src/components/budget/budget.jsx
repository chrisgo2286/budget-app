import BudgetItem from "../budgetItem/budgetItem";

export default function Budget () {
    return (
        <div className='budget'>
            <BudgetItem title='Item 1'/>
            <BudgetItem title='Item 2'/>
            <BudgetItem title='Item 3'/>
            <BudgetItem title='Item 4'/>
        </div>
    )
}