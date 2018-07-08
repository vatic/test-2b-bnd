const oauthModel = require('./src/models/oauth')

const corsOptions = {
    origin: [
        'http://localhost:3000',
        'http://localhost:5000',
        'https://test-2b-frontend.herokuapp.com',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
}

const oauthOptions = {
    model: oauthModel,
    grants: ['password'],
    debug: true,
    passthroughErrors: false,
    continueAfterResponse: true,
    accessTokenLifetime: 864000,
}

const PORT = process.env.PORT || 8080

module.exports = {
    corsOptions,
    oauthOptions,
    PORT,
}

