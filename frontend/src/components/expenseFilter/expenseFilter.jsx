import Button from "../miscComponents/button/button"
// import FilterInput from "../miscComponents/filterInput/filterInput"
import SimpleInput from "../simpleInput/simpleInput"
import CategoryChoices from "./categoryChoices"
import "./expenseFilter.css"
import React from "react"

export default function ExpenseFilter ({ filters, categories, setFilters, setUpdateRequired, filterVisible }) {
    
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
        <div className={ (filterVisible) ? "expense-filter active": "expense-filter"} >
            <div className="filters">
                <div className="filter-inputs">
                    <SimpleInput
                        type="date"
                        name="start_date"
                        value={ filters.start_date }
                        fields={ filters }
                        setFields={ setFilters} />
                    <SimpleInput
                        type="date"
                        name="start_date"
                        value={ filters.start_date }
                        fields={ filters }
                        setFields={ setFilters} />
                    <SimpleInput
                        type="number"
                        name="min_amount"
                        value={ filters.min_amount }
                        fields={ filters }
                        setFields={ setFilters} />
                    <SimpleInput
                        type="number"
                        name="max_amount"
                        value={ filters.max_amount }
                        fields={ filters }
                        setFields={ setFilters} />
                </div>
                <div className="filter-category">
                    <CategoryChoices 
                        categories={ categories }
                        filters={ filters }
                        setFilters={ setFilters }/>
                </div>
                <div className='filter-buttons'>
                    <Button onClick={ handleFilterClicked } label="Filter" />
                    <Button onClick={ handleClearClicked } label="Clear" />
                </div>
            </div>
        </div>
    )
}