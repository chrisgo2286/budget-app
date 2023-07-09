export function getCategoryName (categoryID, categories) {
    for (let i=0; i<categories.length; i++) {
        if (categoryID === categories[i].id) {
            return categories[i].name
        }
    }
}

export function getCategoryType (categoryID, categories) {
    for (let i=0; i<categories.length; i++) {
        if (categoryID === categories[i].id) {
            return categories[i].type
        }
    }
}