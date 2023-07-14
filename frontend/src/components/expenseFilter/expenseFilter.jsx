import Button from "../miscComponents/button/button"

export default function ExpenseFilter () {
    
    function handleAddNew () {
        console.log("Clicked Add New Expense")
    }

    function handleFilter () {
        console.log("Clicked Filter Expenses")
    }

    return (
        <div className="expense-filter">
            <div>Date Range</div>
            <div>Category</div>
            <div>Amount Range</div>
            <div>
                <Button onClick={ handleAddNew } label="Add" />
                <Button onClick={ handleFilter } label="Filter" />
            </div>
        </div>
    )
}