import { useEffect, useState } from "react";
import { getEntries, getCategories } from "../../misc/apiCalls";
import ExpenseEntry from "../expenseEntry/expenseEntry";
import ExpenseFilter from "../expenseFilter/expenseFilter";
import ExpenseHeader from "../expenseHeader/expenseHeader";
import { getCategoryID } from "../../misc/miscFunctions";
import './expensePage.css';

export default function ExpensePage () {
    
    const [ filters, setFilters ] = useState({
        'start_date': '',
        'end_date': '',
        'category': '',
        'min_amount':'',
        'max_amount':'',
    })
    const [ filterClicked, setFilterClicked ] = useState(false)
    const [ entryDeleted, setEntryDeleted ] = useState(false)
    const [ entries, setEntries ] = useState([])
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        let newFilters;
        if (filters.category) {
            const id = getCategoryID(filters.category, categories)
            newFilters = { ...filters, ['category']: id }
        }
        
        getEntries((filters.category) ? newFilters: filters)
        .then((data) => {
            setEntries(data);
        })
        getCategories()
        .then((data) => {
            setCategories(data);
        })
        setEntryDeleted(false)
        setFilterClicked(false)        
    }, [entryDeleted, filterClicked])
    
    return (
        <div className='expense-table'>
            <ExpenseFilter 
                filters={ filters } 
                categories={ categories }
                setFilters={ setFilters }
                setFilterClicked={ setFilterClicked }/>
            <ExpenseHeader />
            { entries.map((entry) => (
                <ExpenseEntry 
                    key={ entry.id } 
                    entry={ entry } 
                    categories={ categories }
                    setEntryDeleted={ setEntryDeleted }/>
            ))}
        </div>
    )
}