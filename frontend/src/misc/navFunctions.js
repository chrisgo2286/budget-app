export function navigateToEditEntry (navigate, entry, categories) {
    navigate('/editEntry', { 
        state: {
            entry: entry, 
            categories: categories 
        }
    })
}   