const express = require('express')
const {
    getAll,
    addPizza,
} = require('../services/pizza')

const pizzaRouter = express.Router()

const getAllHandler = async (req, res) => {
    const pizzas = await getAll()
    res.json(pizzas)
}

const addHandler = async (req, res) => {
    const { name, ids } = req.body
    const result = await addPizza(name, ids)
    res.json(result)
}

pizzaRouter.get('/', getAllHandler)
pizzaRouter.post('/', addHandler)

module.exports = {
    pizzaRouter,
}

