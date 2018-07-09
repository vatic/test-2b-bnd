const { getToken } = require('../services/auth')
const {
    add,
    addWithIngredients,
    list,
    listByUser,
    enable,
    disable,
    count,
    countByUser,
} = require('../models/pizza')

const getTokenInfo = async (token) => {
    const tokenInfo = await getToken(token)
    if (!tokenInfo || !tokenInfo.userId) {
        return {
            code: 403,
            error: 'invalid_token',
            error_description: 'You must provide valid user token.',
        }
    }
    return tokenInfo
}
const addPizza = async (token, name, inggredientsIds) => {
    const tokenInfo = getTokenInfo(token)
    if (tokenInfo.error) {
        return tokenInfo
    }
    try {
        const pizzaId = (await add(name, tokenInfo.userId))[0]
        try {
            const res = await addWithIngredients(pizzaId, inggredientsIds)
            return { res }
        } catch (error) {
            return { error }
        }
    } catch (error) {
        return { error }
    }
}

const getAll = async (limit, offset) => {
    try {
        const pizzasRaw = (await list(limit, offset))
        return pizzasRaw[0]
    } catch (error) {
        return { error }
    }
}

const getAllByUser = async (token, limit, offset) => {
    const tokenInfo = await getTokenInfo(token)
    if (tokenInfo.error) {
        return tokenInfo
    }
    try {
        const pizzasRaw = (await listByUser(tokenInfo.userId, limit, offset))
        return pizzasRaw[0]
    } catch (error) {
        return { error }
    }
}

const getCount = async () => {
    try {
        const countRes = (await count())[0]
        return { total: Object.values(countRes)[0] }
    } catch (error) {
        return { error }
    }
}

const getCountByUser = async (token) => {
    const tokenInfo = await getTokenInfo(token)
    if (tokenInfo.error) {
        return tokenInfo
    }
    try {
        const countRes = (await countByUser(tokenInfo.userId))[0]
        console.dir(countRes)
        return { total: Object.values(countRes)[0] }
    } catch (error) {
        return { error }
    }
}

const enablePizza = async (id) => {
    try {
        const dbRes = (await enable(id))
        return dbRes
    } catch (error) {
        return { error }
    }
}

const disablePizza = async (id) => {
    try {
        const dbRes = (await disable(id))
        return dbRes
    } catch (error) {
        return { error }
    }
}

module.exports = {
    getAll,
    getAllByUser,
    addPizza,
    enablePizza,
    disablePizza,
    getCount,
    getCountByUser,
}
