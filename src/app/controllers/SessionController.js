const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { Investor } = require('../models')
const auth = require('../../config/auth')

const signIn = async(req, res) => {
    const { email, password} = req.body
    
    let investorFormat = {
        investor: {},
        success: false
    }
    let investor = await Investor.findOne({
        where: { email }, 
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })

    if(!investor){
        return res.status(401).json({ error: 'Investor not found'})
    }

    let checkPassword

    try{
        checkPassword = await bcrypt.compare(password, investor.password_hash)
        investor.password_hash = undefined
    }
    catch(err){
        return res.status(400).json({error: err.message})
    }

    if(!checkPassword){
        return res.status(401).json({error: 'Wrong Password'})
    }

    const { id } = investor 
    investorFormat.investor = investor
    investorFormat.success = true

    return res
        .set({
            client: jwt.sign({ email }, auth.secretClient, {
                expiresIn: auth.expiresIn
            }),
            'access-token': jwt.sign({ id }, auth.secretAcessToken, {
                expiresIn: auth.expiresIn
            }),
            uid: email,
        })
        .json(investorFormat)
}

module.exports = {
    signIn
}