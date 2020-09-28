const {Router} = require('express')
const axios = require("axios")

const routes = Router()

let data


routes.get('/', async (req, res) => {
    const apiRes = await axios.get("https://api.github.com/users", {
        'headers': {
            'Authorization': 'token 3a5d249a6b61ad2e3dfd784fc1a822e51f4b7186'
        }
    })

    return res.json(apiRes.data)
})


routes.get('/:login', async (req, res) => {
    const apiRes = await axios.get(`https://api.github.com/users/${req.params.login}`, {
        'headers': {
            'Authorization': `token 3a5d249a6b61ad2e3dfd784fc1a822e51f4b7186` 
        }
    })
    return res.json(apiRes.data)
})

module.exports = routes
