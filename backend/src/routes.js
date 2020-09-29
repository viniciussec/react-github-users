const {Router} = require('express')
const axios = require("axios")

const routes = Router()

routes.get('/', async (req, res) => {
    const apiRes = await axios.get("https://api.github.com/users")

    const result = apiRes.data.filter(user => user.id <= 7)
    return res.json(result)
})


routes.get('/:login', async (req, res) => {
    const apiRes = await axios.get(`https://api.github.com/users/${req.params.login}`)

    return res.json(apiRes.data)
})

module.exports = routes
