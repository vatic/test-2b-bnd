const knex = require('../db/knex')
const uuid = require('node-uuid')

const oauthClients = [
    {
        clientId: 'react',
        clientSecret: 'admin',
        redirectUri: '',
    },
]
const authorizedClientIds = {
    password: [
        'react',
    ],
    refresh_token: [
        'react',
    ],
}

const tableName = 'oauth_tokens'

const deleteAllTokens = () => knex.truncate(tableName)

const deleteToken = token => knex(tableName).where({ access_token: token }).del()

/*
* Required
*/
const getAccessToken = async (bearerToken, callback) => {
    if (!bearerToken) callback('No bearer token', false)
    try {
        const result = await knex('oauth_tokens')
            .where({ access_token: bearerToken })
            .select('access_token', 'client_id', 'expires', 'user_id')
        if (result.length === 0) return callback(true, false)
        const token = result[0]
        return callback(false, {
            accessToken: token.access_token,
            clientId: token.client_id,
            expires: token.expires,
            userId: token.user_id,
        })
    } catch (error) {
        return callback(error)
    }
}

const getAccessTokenPromise = bearerToken => (
    getAccessToken(bearerToken, (err, token) => {
        if (err) {
            return Promise.reject(err)
        }
        return Promise.resolve(token)
    })
)

const getClient = (clientId, clientSecret, callback) =>
    callback(false, oauthClients[0])

const grantTypeAllowed = (clientId, grantType, callback) => {
    callback(false, authorizedClientIds[grantType] &&
        authorizedClientIds[grantType].indexOf(clientId.toLowerCase()) >= 0)
}

const saveAccessToken = async (accessToken, clientId, expires, userId, callback) => {
    try {
        await knex('oauth_tokens').insert({
            id: uuid.v1(),
            access_token: accessToken,
            client_id: clientId,
            user_id: userId.id,
            expires,
        })
    } catch (error) {
        callback(error)
    }
    callback(false)
}

/*
* Required to support password grant type
*/
const getUser = async (username, password, callback) => {
    // const query = 'select * from users where username=? and password=SHA(?)'
    const query = `select * from users where username='${username}' and password=SHA('${password}')`

    try {
        // const result = (await knex.raw(query, [username, password]))
        const result = (await knex.raw(query))[0]
        console.log(result.length > 0)
        callback(false, result.length > 0 ? result[0] : false)
    } catch (error) {
        callback(error, false)
    }
}

module.exports = {
    getClient,
    grantTypeAllowed,
    getUser,
    saveAccessToken,
    getAccessToken,
    getAccessTokenPromise,
    deleteAllTokens,
    deleteToken,
}
