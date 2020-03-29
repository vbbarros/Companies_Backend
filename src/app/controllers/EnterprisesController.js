const EnterprisesService = require('../services/EnterprisesService')

const findOne = async(req, res) => {
    let formatEnterprise = {
        enterprise: {},
        success: false
    }
    try{
        
        const findEnterprise = await EnterprisesService.findOne(req.params)

        formatEnterprise.enterprise = findEnterprise
        formatEnterprise.success = true

        return res.json(formatEnterprise)

    }catch(err){
        return res.status(400).json( {error: err.message} )        
    }
}

const findWithFilter = async(req, res) => {
    const { enterprise_types, name } = req.query
    let enterprisesFormat = {
        enterprises: {}
    }
    try{
        if(enterprise_types && name){
            enterprisesFormat.enterprises = await EnterprisesService.findByNameAndEnterpriseType({enterprise_types, name})
        }else if(enterprise_types){
            enterprisesFormat.enterprises = await EnterprisesService.findByEnterprise(enterprise_types)
        }else if (name){
            enterprisesFormat.enterprises = await EnterprisesService.findByName(name)
        }else {
            return res.status(400).json( {error: "Please inform the params to filter data"} )
        }
        return res.json(enterprisesFormat)
    }catch(err){
        return res.status(400).json( {error: err.message} )
    }
    
}

module.exports = {
    findOne,
    findWithFilter
}