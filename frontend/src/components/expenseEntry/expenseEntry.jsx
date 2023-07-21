import { getCategoryName, getCategoryType } from "../../misc/miscFunctions";
import { useNavigate } from 'react-router-dom';
import { navigateToEditEntry } from "../../misc/navFunctions";
import { deleteEntries } from "../../misc/apiCalls";

export default function ExpenseEntry ({ entry, categories, setEntryDeleted }) {

    const navigate = useNavigate();

    function onEntryClick () {
        navigateToEditEntry(navigate, entry)
    }

    function onDeleteClick (e) {
        e.stopPropagation();
        deleteEntries(entry.id)
        setEntryDeleted(true)
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