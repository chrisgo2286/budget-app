import ChoiceButton from "../miscComponents/choiceButton/choiceButton"

export default function CategoryChoices ({ categories, filters, setFilters}) {
    
    function checkIfActive (categoryName) {
        if(filters.categories==='') {
            return false
        }
        for (let i=0; i<filters.categories.length; i++) {
            if (categoryName === filters.categories[i]) {
                return true
            }
        }
        return false
    }

    function toggleActive (categoryName) {
        let newCategories = [ ...filters.categories ]
        if (checkIfActive(categoryName)) {
            const ndx = newCategories.indexOf(categoryName)
            newCategories.splice(ndx, 1)
        } else {
            newCategories.push(categoryName)
        }
        setFilters({ ...filters, ['categories']: newCategories })
    }

    return (
        <div>
            { categories.map((category) => (
                <ChoiceButton
                    key={ category.id }
                    checkIfActive={ checkIfActive }
                    toggleActive={ toggleActive }
                    label={ category.name } />            
            ))}
        </div>
    )
}