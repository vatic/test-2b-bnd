const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


const logger = require('winston')
const bodyParser = require('body-parser')
const { serverInfoRouter } = require('./routes/serverInfo')
const { pizzaRouter } = require('./routes/pizza')
// const { restrictedPhoneRouter, checkPhoneRouter } = require('./routes/phones');
// const { logoutRouter } = require('./routes/auth');
// const OAuthServer = require('oauth2-server');


module.exports = (config) => {
    // const { corsOptions, oauthOptions, PORT } = config;
    const { corsOptions, PORT } = config

    const app = express()
    app.use(morgan('combined'))

    app.use(cors(corsOptions))

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    // app.oauth = new OAuthServer(oauthOptions);

    app.all('/', (req, res) => res.json({ root: 'This is API server for pizza backend' }))
    // app.all('/login', app.oauth.grant());
    // app.use('/logout', app.oauth.authorise(), logoutRouter);

    // app.use(app.oauth.errorHandler());

    app.use('/ping', serverInfoRouter)
    app.use('/pizzas', pizzaRouter)

    app.listen(PORT, () => {
        logger.info(`Easypay test app listening on port ${PORT}!`)
    })
}

// module.exports = app;
