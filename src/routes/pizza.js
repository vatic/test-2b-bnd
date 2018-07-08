const express = require('express')
const {
    getAll,
    getAllByUser,
    addPizza,
    enablePizza,
    disablePizza,
    getCount,
} = require('../services/pizza')

const myAuthErrorHandler = (req, res, next) => {
    console.dir(res)
    next()
}


const pizzaRouter = express.Router()
// pizzaRouter.use(myAuthErrorHandler)

const getAllHandler = async (req, res) => {
    const { limit, offset } = req.query
    const pizzas = await getAll(limit, offset)
    res.json(pizzas)
}

const getAllByUserHandler = async (req, res) => {
    const { limit, offset } = req.query
    const token =  req.headers.authorization.split(' ')[1]
    const pizzas = await getAllByUser(token, limit, offset)
    res.json(pizzas)
}

const addHandler = async (req, res) => {
    const { name, ids } = req.body
    const token =  req.headers.authorization.split(' ')[1]
    console.log(token)
    const result = await addPizza(token, name, ids)
    console.log(result)
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

const getCountHandler = async (req, res) => {
    const result = await getCount()
    res.json(result)
}

pizzaRouter.get('/', getAllHandler)
pizzaRouter.get('/user', getAllByUserHandler)
pizzaRouter.get('/count', getCountHandler)
pizzaRouter.post('/', addHandler)
pizzaRouter.post('/:id/enable', enableHandler)
pizzaRouter.delete('/:id', disableHandler)

module.exports = {
    pizzaRouter,
}

