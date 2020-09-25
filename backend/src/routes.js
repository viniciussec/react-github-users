const {Router} = require('express')
const axios = require("axios")

const routes = Router()

let data

routes.get('/', async (req, res) => {
    const apiRes = await axios.get("https://api.github.com/users")
    console.log(apiRes.data)

    return res.json(apiRes.data)
})

module.exports = routes

