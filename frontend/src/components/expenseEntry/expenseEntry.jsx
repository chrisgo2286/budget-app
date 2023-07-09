import { getCategoryName, getCategoryType } from "../../misc/miscFunctions";

export default function ExpenseEntry ({ entry, categories }) {

    return (
        <div className='expense-entry'>
            <div>{ entry.date }</div>
            <div>{ getCategoryName(entry.category, categories) }</div>
            <div>{ getCategoryType(entry.category, categories) }</div>
            <div>{ entry.amount} </div>
        </div>
    )
}