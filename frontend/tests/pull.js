import api from '../services/api.js'

async function pullUser(login) {
    const response = await api.get(`/${login}`)
    return response.data
}

export default pullUser