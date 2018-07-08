const express = require('express')
const R = require('ramda')

const { removeToken, getUserByToken } = require('../services/auth')

const logoutRouter = express.Router()
const userRouter = express.Router()

logoutRouter
    .post('/', async (req, res) => {
        const { token } = req.body
        const result = await removeToken(token)
        if (R.has('status')(result)) res.sendStatus(result.status)
        res.json(result)
    })

userRouter
    .get('/', async (req, res) => {
        const token =  req.headers.authorization.split(' ')[1]
        const result = await getUserByToken(token)
        console.dir(result)
        res.json(result)
    })

module.exports = {
    logoutRouter,
    userRouter,
}
