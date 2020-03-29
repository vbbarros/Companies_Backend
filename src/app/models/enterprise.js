module.exports = (sequelize, DataTypes) => {
    const Enterprise = sequelize.define('Enterprise', {
        enterprise_name: DataTypes.STRING,
        description: DataTypes.TEXT,
        email_enterprise: DataTypes.STRING,
        facebook: DataTypes.STRING,
        twitter: DataTypes.STRING,
        linkedin: DataTypes.STRING,
        phone: DataTypes.STRING,
        own_enterprise: DataTypes.BOOLEAN,
        photo: DataTypes.STRING,
        value: DataTypes.DOUBLE,
        shares: DataTypes.INTEGER,
        share_price: DataTypes.DOUBLE,
        own_shares: DataTypes.INTEGER,
        city: DataTypes.STRING,
        country: DataTypes.STRING,
    })
    Enterprise.associate = function(models) {
        Enterprise.belongsTo(models.EnterpriseType, {foreignKey: 'enterprise_type_id'})
    }
    return Enterprise
}