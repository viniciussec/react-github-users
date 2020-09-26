const {Router} = require('express')
const axios = require("axios")

const routes = Router()

let data


routes.get('/', async (req, res) => {
    const apiRes = await axios.get("https://api.github.com/users")

    return res.json(apiRes.data)
})


routes.get('/:login', async (req, res) => {
    console.log(req.params)
    const apiRes = await axios.get(`https://api.github.com/users/${req.params.login}`)

    return res.json(apiRes.data)
})

module.exports = routes

