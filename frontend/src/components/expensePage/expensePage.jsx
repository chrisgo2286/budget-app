import { useEffect, useState } from "react";
import { getEntries, getCategories } from "../../misc/apiCalls";
import ExpenseEntry from "../expenseEntry/expenseEntry";
import ExpenseFilter from "../expenseFilter/expenseFilter";
import ExpenseHeader from "../expenseHeader/expenseHeader";
import ToggleFilter from "../expenseFilter/toggleFilter";
import { convertNamesToIDs } from "../../misc/miscFunctions";
import './expensePage.css';

export default function ExpensePage () {
    
    const [ filters, setFilters ] = useState({
        'start_date': '',
        'end_date': '',
        'categories': [],
        'min_amount':'',
        'max_amount':'',
    })
    const [ updateRequired, setUpdateRequired ] = useState(false)
    const [ entries, setEntries ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ filterVisible, setFilterVisible ] = useState(false)

    useEffect(() => {
        let newFilters;
        if (filters.categories.length > 0) {
            const categoryIDs = convertNamesToIDs(filters.categories, categories)
            newFilters = { ...filters, ['categories']: categoryIDs.toString() }
        } else {
            newFilters = { ...filters, ['categories']: '' }
        }
        
        getEntries(newFilters)
        .then((data) => {
            setEntries(data);
        })
        getCategories()
        .then((data) => {
            setCategories(data);
        })
        setUpdateRequired(false)
    }, [updateRequired])

    function toggleFilter () {
        setFilterVisible(!filterVisible)
    }
    
    return (
        <div className='expense-table'>
            <ToggleFilter toggleFilter={ toggleFilter } />
            
            <ExpenseFilter 
                filters={ filters } 
                categories={ categories }
                filterVisible={ filterVisible }
                setFilters={ setFilters }
                setUpdateRequired={ setUpdateRequired }/>
            
            <ExpenseHeader />
            { entries.map((entry) => (
                <ExpenseEntry 
                    key={ entry.id } 
                    entry={ entry } 
                    categories={ categories }
                    setUpdateRequired={ setUpdateRequired }/>
            ))}
        </div>
    )
}