const express = require('express')
const {
    getAll,
} = require('../services/types')

const typesRouter = express.Router()

const getAllHandler = async (req, res) => {
    const types = await getAll()
    res.json(types)
}

typesRouter.get('/', getAllHandler)

module.exports = {
    typesRouter,
}

