import Button from "../miscComponents/button/button"
import { filterEntries } from "../../misc/apiCalls"
import Input from "../miscComponents/input/input"
import SelectField from "../miscComponents/selectField/selectField" 

export default function ExpenseFilter ({ filters, setFilters, setFilterClicked }) {
    
    function handleClick () {
        setFilterClicked(true)
    }

    return (
        <div className="expense-filter">
            <div className="filters">
                <div className="filter-date">
                    <Input />
                    <Input />
                </div>
                <div>Category</div>
                <div>Amount Range</div>
            </div>
            <Button onClick={ handleClick } label="Filter" />
        </div>
    )
}