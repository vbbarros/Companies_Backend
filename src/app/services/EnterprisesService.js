const { Enterprise } = require('../models')
const { EnterpriseType } = require('../models')
const { Op } = require('sequelize')

const findOne = async(data) => {
    const enterprise = await Enterprise.findOne({
        where: { id: data.id },
        include: {
            model: EnterpriseType,
            attributes: ['id', 'enterprise_type_name'],
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'enterprise_type_id', 'EnterpriseTypeId'],
          }
    })

    return enterprise
}

const findByNameAndEnterpriseType = async(data) => {
    const enterprise = await Enterprise.findAll({
        where: { 
            enterprise_name: {
                [Op.iLike]: `%${data.name}%`,
            },
            enterprise_type_id: data.enterprise_types
        },
        include: {
            model: EnterpriseType,
            attributes: ['id', 'enterprise_type_name'],
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'enterprise_type_id', 'EnterpriseTypeId'],
          }
    })

    return enterprise
}

const findByName = async(data) => {
    const enterprise = await Enterprise.findAll({
        where: { 
            enterprise_name: {
                [Op.iLike]: `%${data}%`,
            }
        },
        include: {
            model: EnterpriseType,
            attributes: ['id', 'enterprise_type_name'],
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'enterprise_type_id', 'EnterpriseTypeId'],
          }
    })

    return enterprise
}

const findByEnterprise = async(data) => {
    const enterprise = await Enterprise.findAll({
        where: { 
            enterprise_type_id: data
        },
        include: {
            model: EnterpriseType,
            attributes: ['id', 'enterprise_type_name'],
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'enterprise_type_id', 'EnterpriseTypeId'],
          }
    })

    return enterprise
}

module.exports = {
    findOne,
    findByNameAndEnterpriseType,
    findByName,
    findByEnterprise
}