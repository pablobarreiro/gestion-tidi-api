const S = require('sequelize');
const db = require('../db')
const bcrypt = require('bcrypt')

class User extends S.Model {
    hashPassword(password,salt) {
        return bcrypt.hashSync(password, salt)
    }

    validatePassword(password) {
        return this.password === this.hashPassword(password,this.salt)
    }
}

User.init({
username: {
    type: S.STRING,
    unique: true,
    allowNull: false
},
password: {
    type:S.STRING,
    allowNull: false
},
salt: {
    type:S.STRING
},
is_admin: {
    type: S.BOOLEAN,
    defaultValue: false
}
},{sequelize: db, modelName: 'users'})

User.addHook('beforeCreate',(user)=>{
if(!user.password.length) {
    user.password = null
    return
} 
return bcrypt.genSalt(8).then((cryptedSalt)=>{
    user.salt = cryptedSalt
    user.password = user.hashPassword(user.password,user.salt)
})
.catch(err=>console.log(err))
})

module.exports = User
