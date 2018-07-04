const express = require('express')
const {
    getAll,
    addPizza,
} = require('../services/pizza')

const pizzaRouter = express.Router()

const getAllHandler = async (req, res) => {
    const pizzas = await getAll()
    res.json({ pizzas })
}

const addHandler = async (req, res) => {
    const { name, ids } = req.body
    const pizzas = await addPizza(name, ids)
    res.json({ pizzas })
}

pizzaRouter.get('/', getAllHandler)
pizzaRouter.post('/', addHandler)

module.exports = {
    pizzaRouter,
}

