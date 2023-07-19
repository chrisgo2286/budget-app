import { getCategoryName, getCategoryType } from "../../misc/miscFunctions";
import { useNavigate } from 'react-router-dom';
import { navigateToEditEntry } from "../../misc/navFunctions";

export default function ExpenseEntry ({ entry, categories }) {

    const navigate = useNavigate();

    function onEntryClick () {
        navigateToEditEntry(navigate, entry)
    }

    function onDeleteClick (e) {
        e.stopPropagation();
        console.log("Delete Clicked")
    }

    return (
        <div className='expense-entry' onClick={ onEntryClick }>
            <div className='column'>{ entry.date }</div>
            <div className='column'>{ getCategoryName(entry.category, categories) }</div>
            <div className='column'>{ getCategoryType(entry.category, categories) }</div>
            <div className='column'>{ entry.amount} </div>
            <i 
                className='fa fa-trash delete' 
                aria-hidden="true"
                onClick={ onDeleteClick }>
            </i>
        </div>
    )
}