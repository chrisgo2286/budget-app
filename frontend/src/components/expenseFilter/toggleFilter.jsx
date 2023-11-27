import "./expenseFilter.css"

export default function ToggleFilter ({ toggleFilter }) {
    return (    
        <div className="collapse-btn">
            <i onClick={ toggleFilter } class="material-icons">expand_more</i>
        </div>
    )
}