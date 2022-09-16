import Sequelize, {Model} from "sequelize";
import databaseConfig from "../config/database";
import bcryptjs from 'bcryptjs'

const connection = new Sequelize(databaseConfig)

const User = connection.define('User', {
  name: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
    unique: {
      msg: "Email já existe"
    },
    validate: {
      isEmail: {
        args: [3, 255],
        msg: "Email inválido"
      },
    },
  },
  password_hash: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  password: {
    type: Sequelize.VIRTUAL,
    defaultValue: '',
    validate: {
      len: {
        args: [6, 50],
        msg: 'A senha deve conter entre 6 e 50 caracteres'
      }
    }
  },
},
{
  hooks: {
    beforeSave: async (user) => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8)
      }
  }
},
},
)
// connection.addHook('beforeSave', async (user) => {
//   if(user.dataValues.password){
//     user.dataValues.password_hash = await bcryptjs.hash('asdsdfa', 8)
//   }
// })
export default User

// export default class User extends Model {}

// User.init({
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   password_hash: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
// },{
//   connection,
//   modelName: 'User'
// })

