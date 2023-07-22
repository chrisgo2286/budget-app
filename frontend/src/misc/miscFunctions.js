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

export function compileCategoryNames (categories) {
    let categoryNames = [];
    for (let i=0; i<categories.length; i++) {
        categoryNames.push(categories[i].name)
    }
    return categoryNames
}

export function getCategoryID (categoryName, categories) {
    for (let i=0; i<categories.length; i++) {
        if (categoryName === categories[i].name) {
            return categories[i].id
        }
    } 
}

export function convertCategoryNameToID (categoryName, categories) {
    if( categoryName === '') {
        return categories[0].id
    }
    return getCategoryID(categoryName, categories)
}

export function convertNamesToIDs (categoryNames, categories) {
    const categoryIDs = []
    for (let i=0; i< categoryNames.length; i++) {
        const id = getCategoryID(categoryNames[i], categories)
        categoryIDs.push(id)
    }
    return categoryIDs;
}