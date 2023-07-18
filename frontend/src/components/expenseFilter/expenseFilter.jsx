import Button from "../miscComponents/button/button"

export default function ExpenseFilter () {
    
    function handleFilter () {
        console.log("Clicked Filter Expenses")
    }

    return (
        <div className="expense-filter">
            <div className="filters">
                <div>Date Range</div>
                <div>Category</div>
                <div>Amount Range</div>
            </div>
            <Button onClick={ handleFilter } label="Filter" />
        </div>
    )
}