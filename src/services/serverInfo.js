const { mysqlInfo } = require('../models/serverInfo')

const serverInfoService = async (req, res) => {
    dbResult = await mysqlInfo()
    res.json({ server: dbResult })
}

module.exports = serverInfoService
