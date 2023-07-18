import { getCategoryName, getCategoryType } from "../../misc/miscFunctions";

export default function ExpenseEntry ({ entry, categories }) {

    return (
        <div className='expense-entry'>
            <div className='column'>{ entry.date }</div>
            <div className='column'>{ getCategoryName(entry.category, categories) }</div>
            <div className='column'>{ getCategoryType(entry.category, categories) }</div>
            <div className='column'>{ entry.amount} </div>
            <div className='delete'>X</div>
        </div>
    )
}