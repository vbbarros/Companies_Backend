const jwt = require('jsonwebtoken')
const auth = require('../../config/auth')
const {promisify} = require('util')

module.exports = async(req, res, next) => {
    const {client, uid} = req.headers
    const accessToken = req.headers['access-token'];

    if (!client || !uid || !accessToken){
        return res.status(401).json({ error: 'The headers are incorrect' })
    }

    try {
        const decodedClient = await promisify(jwt.verify)(client, auth.secretClient)
        const decodedAcessToken = await promisify(jwt.verify)(accessToken, auth.secretAcessToken)
        req.userId = decodedAcessToken.id
        req.userEmail = decodedClient.email
        return next()
    }catch(err){
        return res.status(401).json({ error: 'Token invalid'})
    }
}