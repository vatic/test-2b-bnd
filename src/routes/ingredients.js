const express = require('express')
const {
    getAll,
} = require('../services/ingredients')

const ingredientsRouter = express.Router()

const getAllHandler = async (req, res) => {
    const ingredients = await getAll()
    res.json(ingredients)
}

ingredientsRouter.get('/', getAllHandler)

module.exports = {
    ingredientsRouter,
}

