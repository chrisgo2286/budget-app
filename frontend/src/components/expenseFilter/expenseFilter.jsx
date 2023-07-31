import Button from "../miscComponents/button/button"
import Input from "../miscComponents/input/input"
import FilterInput from "../miscComponents/filterInput/filterInput"
import CategoryChoices from "./categoryChoices"
import "./expenseFilter.css"

export default function ExpenseFilter ({ filters, categories, setFilters, setUpdateRequired }) {
    
    function handleFilterClicked () {
        setUpdateRequired(true)
    }

    function handleClearClicked () {
        setFilters({
            'start_date': '',
            'end_date': '',
            'categories': [],
            'min_amount':'',
            'max_amount':'',
        })
        setUpdateRequired(true)
    }

    return (
        <div className="expense-filter">
            <div className="filters">
                <div className="filter-inputs">
                    <FilterInput
                        type="date"
                        name="start_date"
                        value={ filters.start_date }
                        fields={ filters }
                        setFields={ setFilters } />
                    <FilterInput 
                        type="date"
                        name="end_date"
                        value={ filters.end_date }
                        fields={ filters }
                        setFields={ setFilters } />
                    <FilterInput
                        type="number"
                        name="min_amount"
                        value={ filters.min_amount }
                        fields={ filters }
                        setFields={ setFilters } />
                    <FilterInput
                        type="number"
                        name="max_amount"
                        value={ filters.max_amount }
                        fields={ filters }
                        setFields={ setFilters } />
                </div>
                <div className="filter-category">
                    <CategoryChoices 
                        categories={ categories }
                        filters={ filters }
                        setFilters={ setFilters }/>
                </div>
            </div>
            <div className='filter-buttons'>
                <Button onClick={ handleFilterClicked } label="Filter" />
                <Button onClick={ handleClearClicked } label="Clear" />
            </div>
        </div>
    )
}