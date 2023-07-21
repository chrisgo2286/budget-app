import axios from 'axios';

export const getEntries = async () => {
    const result = await axios.get('/api/entries/')
    return result.data
}

export const getCategories = async () => {
    const result = await axios.get('/api/categories/')
    return result.data
}

export async function postEntries (fields) {
    const response = await axios.post('/api/entries/', fields)
    return response.data
}

export async function patchEntries (id, fields) {
    const response = await axios.patch('/api/entries/' + id + '/', fields)
    return response.data
}

export async function deleteEntries (id) {
    axios.delete('/api/entries/' + id + '/')
}
// Account API Calls

export async function postRegistration (credentials) {
    const response = await axios.post('/api/accounts/registration/', credentials)
    console.log(response)
    return response
}

export async function postLogin (credentials) {
    try {
        const response = await axios.post('/api/accounts/login/', credentials)
        console.log(response)
        return response
    } catch {
        console.log('Invalid Credentials')
        return 'Invalid Credentials';
    }
}

export async function postLogout () {
    const response = await axios.post('/api/accounts/logout/')
    return response
}