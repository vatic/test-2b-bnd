const express = require('express')
const {
    getAll,
    addPizza,
    enablePizza,
    disablePizza,
} = require('../services/pizza')

const pizzaRouter = express.Router()

const getAllHandler = async (req, res) => {
    const { limit, offset } = req.query
    const pizzas = await getAll(limit, offset)
    res.json(pizzas)
}

const addHandler = async (req, res) => {
    const { name, ids } = req.body
    const result = await addPizza(name, ids)
    res.json(result)
}

const enableHandler = async (req, res) => {
    const { id } = req.params
    const result = await enablePizza(id)
    res.json(result)
}

const disableHandler = async (req, res) => {
    const { id } = req.params
    const result = await disablePizza(id)
    res.json(result)
}

pizzaRouter.get('/', getAllHandler)
pizzaRouter.post('/', addHandler)
pizzaRouter.post('/:id/enable', enableHandler)
pizzaRouter.delete('/:id', disableHandler)

module.exports = {
    pizzaRouter,
}

