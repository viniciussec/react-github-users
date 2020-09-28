const {Router} = require('express')
const axios = require("axios")

const routes = Router()

let data


routes.get('/', async (req, res) => {
    const apiRes = await axios.get("https://api.github.com/users", {
        'headers': {
            'Authorization': 'token a2ab08f22bce59ebd494fec9854762b1f89521a6'
        }
    })

    return res.json(apiRes.data)
})


routes.get('/:login', async (req, res) => {
    const apiRes = await axios.get(`https://api.github.com/users/${req.params.login}`, {
        'headers': {
            'Authorization': `token a2ab08f22bce59ebd494fec9854762b1f89521a6` 
        }
    })
    return res.json(apiRes.data)
})

module.exports = routes
