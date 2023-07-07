import axios from 'axios';

export const getEntries = async () => {
    const result = await axios.get('/api/entries/')
    return result.data
}