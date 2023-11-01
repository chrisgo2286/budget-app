import { useEffect, useState } from "react";
import BudgetItem from "../budgetItem/budgetItem";
import { getBudgetItems, getCategories } from "../../misc/apiCalls";
import './budgetPage.css'

export default function BudgetPage () {

    const [budgetItems, setBudgetItems] = useState([]) 
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        getBudgetItems()
        .then((data) => {
            setBudgetItems(data);
        })

        getCategories()
        .then((data) => {
            setCategories(data);
        })
    }, [])

    return (
        <div className='budget-page'>
            { budgetItems.map((budgetItem) => (
                <BudgetItem
                    key={ budgetItem.id }
                    budgetItem={ budgetItem }
                    categories={ categories } />
            ))}
        </div>
    )
}