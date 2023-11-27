import React, { useState, useEffect} from 'react'
import Budget from "../budget/budget"
import Categories from '../categories/categories'
import { getCategories } from '../../misc/apiCalls'
import './budgetPage.css'

export default function BudgetPage () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((data) => {
            setCategories(data);
        })
    },[])
        

    return (
        <div className="budget-page">
            <Budget categories={ categories }/>
            <Categories categories={ categories }/>
            <div className="summary-item2">Summary Item 2</div>
            <div className="summary-item3">Summary Item 3</div>
        </div>
    )
}