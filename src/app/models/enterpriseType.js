module.exports = (sequelize, DataTypes) => {
    const EnterpriseType = sequelize.define('EnterpriseType', {
        enterprise_type_name: DataTypes.STRING,
    })
    EnterpriseType.associate = function(models) {
        EnterpriseType.hasMany(models.Enterprise)
    }
    return EnterpriseType
}