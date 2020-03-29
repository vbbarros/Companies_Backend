const InvestorController = require('../services/InvestorService')

const store = async(req, res) => {
    try {
        await InvestorController.validateUniqueEmail(req.body)
        const {id, email} = await InvestorController.store(req.body)
        return res.json({id, email})
    }
    catch(err){
        return res.status(400).json({error: err.message})        
    }
}

module.exports ={
    store
}