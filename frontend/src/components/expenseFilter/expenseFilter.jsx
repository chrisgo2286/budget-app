import Button from "../miscComponents/button/button"
import Input from "../miscComponents/input/input"
import SelectField from "../miscComponents/selectField/selectField" 
import { compileCategoryNames } from "../../misc/miscFunctions"

export default function ExpenseFilter ({ filters, categories, setFilters, setUpdateRequired }) {
    
    function handleFilterClicked () {
        setUpdateRequired(true)
    }

    function handleClearClicked () {
        setFilters({
            'start_date': '',
            'end_date': '',
            'category': '',
            'min_amount':'',
            'max_amount':'',
        })
        setUpdateRequired(true)
    }

    return (
        <div className="expense-filter">
            <div className="filters">
                <div className="filter-date">
                    <Input
                        type="date"
                        name="start_date"
                        value={ filters.start_date }
                        fields={ filters }
                        setFields={ setFilters } />
                    <Input 
                        type="date"
                        name="end_date"
                        value={ filters.end_date }
                        fields={ filters }
                        setFields={ setFilters } />
                </div>
                <div className="filter-category">
                    <SelectField 
                        name="category"
                        initial=""
                        options={ compileCategoryNames(categories) }
                        fields={ filters }
                        setFields={ setFilters } />
                </div>
                <div>
                    <Input
                        type="number"
                        name="min_amount"
                        value={ filters.min_amount }
                        fields={ filters }
                        setFields={ setFilters } />
                    <Input
                        type="number"
                        name="max_amount"
                        value={ filters.max_amount }
                        fields={ filters }
                        setFields={ setFilters } />
                </div>
            </div>
            <Button onClick={ handleFilterClicked } label="Filter" />
            <Button onClick={ handleClearClicked } label="Clear" />
        </div>
    )
}