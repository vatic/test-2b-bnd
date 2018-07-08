const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const logger = require('winston')
const bodyParser = require('body-parser')
const { serverInfoRouter } = require('./routes/serverInfo')
const { pizzaRouter } = require('./routes/pizza')
const { ingredientsRouter } = require('./routes/ingredients')
const { typesRouter } = require('./routes/types')
// const { restrictedPhoneRouter, checkPhoneRouter } = require('./routes/phones')

const { logoutRouter } = require('./routes/auth')
const OAuthServer = require('oauth2-server')


module.exports = (config) => {
    const { corsOptions, oauthOptions, PORT } = config

    const app = express()

    const myAuthErrorHandler = (req, res, next) => {
        console.dir(res)
        next()
    }

    app.use(morgan('combined'))

    app.use(cors(corsOptions))

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.oauth = new OAuthServer(oauthOptions)

    app.all('/', (req, res) => res.json({ root: 'This is API server for pizza backend' }))
    app.all('/login', app.oauth.grant())
    app.use('/logout', app.oauth.authorise(), logoutRouter)

    app.use('/ping', serverInfoRouter)

    app.use('/pizzas', app.oauth.authorise(), pizzaRouter)
    app.use('/ingredients', app.oauth.authorise(), ingredientsRouter)
    app.use('/types', app.oauth.authorise(), typesRouter)

    app.listen(PORT, () => {
        logger.info(`Easypay test app listening on port ${PORT}!`)
    })
    app.use(app.oauth.errorHandler())
}

// module.exports = app;
