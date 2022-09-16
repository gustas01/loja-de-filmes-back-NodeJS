import Sequelize from "sequelize";
import User from "./User";
import databaseConfig from "../config/database";

const connection = new Sequelize(databaseConfig)

const ShoppingCart = connection.define('ShoppingCart', {
  shoppingCart: {
    type: Sequelize.JSON,
    defaultValue: '',
    allowNull: false,
    },
},
{},)

ShoppingCart.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

export default ShoppingCart
