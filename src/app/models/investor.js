const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const Investor = sequelize.define('Investor', {
      investor_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      balance: DataTypes.DOUBLE,
      photo: DataTypes.STRING,
      portfolio_value: DataTypes.DOUBLE,
      first_access: DataTypes.BOOLEAN,
      super_angel: DataTypes.BOOLEAN,
    })

    Investor.addHook('beforeSave', async(investor) => {
      if(investor.password){
        investor.password_hash = await bcrypt.hash(investor.password, 8)
      }
    })
    
    return Investor
}  