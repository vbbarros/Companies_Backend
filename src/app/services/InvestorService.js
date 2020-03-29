const { Investor } = require('../models')

const store = async(data) => {
    const investor = await Investor.create(data);
    return investor;
}

const validateUniqueEmail = async(data) => {
    const checkInvestor = await Investor.findOne({
        where: { email: data.email},
    });
    if (checkInvestor){
        throw new Error("Este email já possui cadastro") 
    }
}

module.exports = {
    store,
    validateUniqueEmail
}