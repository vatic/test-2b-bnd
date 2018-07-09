const express = require('express')
const { getUserByToken } = require('../services/auth')
const {
    getAll,
    getAllByUser,
    addPizza,
    enablePizza,
    disablePizza,
    getCount,
    getCountByUser,
} = require('../services/pizza')


const pizzaRouter = express.Router()
// pizzaRouter.use(myAuthErrorHandler)

const getAllHandler = async (req, res) => {
    const { limit, offset } = req.query
    const token =  req.headers.authorization.split(' ')[1]
    const user = await getUserByToken(token)
    if (user.role !== 'admin') {
        return res.json({
            code: 403,
            error: 'access_denied',
            error_description: 'You must have valid role.',
        })
    }
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
    const result = await addPizza(token, name, ids)
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

const getCountByUserHandler = async (req, res) => {
    console.dir(req.headers.authorization)
    const token =  req.headers.authorization.split(' ')[1]
    const result = await getCountByUser(token)
    res.json(result)
}

pizzaRouter.get('/', getAllHandler)
pizzaRouter.get('/user', getAllByUserHandler)
pizzaRouter.get('/count/user', getCountByUserHandler)
pizzaRouter.get('/count', getCountHandler)
pizzaRouter.post('/', addHandler)
pizzaRouter.post('/:id/enable', enableHandler)
pizzaRouter.delete('/:id', disableHandler)

module.exports = {
    pizzaRouter,
}

