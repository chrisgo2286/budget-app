import { useEffect, useState } from "react";
import BudgetItem from "../budgetItem/budgetItem";
import NewBudgetItem from "../newBudgetItem/newBudgetItem";
import { getBudgetItems } from "../../misc/apiCalls";

export default function Budget ({ categories }) {

    const [budgetItemData, setBudgetItemData] = useState([]) 
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        getBudgetItems()
        .then((data) => {
            setBudgetItemData(data);
        })

        setUpdated(false)
    }, [updated])

    return (
        <div className='budget'>
            <div className="budget-items">
                {  budgetItemData.map((data) => (
                    <BudgetItem
                        key={ data.id }
                        data={ data } />
                ))}
            </div>
            <NewBudgetItem 
                categories={ categories }
                setUpdated={ setUpdated } />
        </div>
    )
}