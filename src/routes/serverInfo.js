const express = require('express')
const serverInfoService = require('../services/serverInfo')

const serverInfoRouter = express.Router()

serverInfoRouter.get('/', serverInfoService)

module.exports = {
    serverInfoRouter,
}
