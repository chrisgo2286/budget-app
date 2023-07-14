import { useEffect, useState } from "react";
import { getEntries, getCategories } from "../../misc/apiCalls";
import ExpenseEntry from "../expenseEntry/expenseEntry";
import ExpenseFilter from "../expenseFilter/expenseFilter";
import ExpenseHeader from "../expenseHeader/expenseHeader";
import './expensePage.css';

export default function ExpensePage () {
    
    const [entries, setEntries ] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getEntries()
        .then((data) => {
            setEntries(data);
        })
        getCategories()
        .then((data) => {
            setCategories(data);
        })        
    }, [])
    
    return (
        <div className='expense-table'>
            <ExpenseFilter />
            <ExpenseHeader />
            { entries.map((entry) => (
                <ExpenseEntry 
                    key={ entry.id } 
                    entry={ entry } 
                    categories={ categories }/>
            ))}
        </div>
    )
}