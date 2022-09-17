import Sequelize from "sequelize";
import User from "./User";
import databaseConfig from "../config/database";

const connection = new Sequelize(databaseConfig)

const ShoppingCart = connection.define('shopping_carts', {
  products: {
    type: Sequelize.JSON,
    defaultValue: '',
    allowNull: false,
    },
},
{},)

ShoppingCart.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

export default ShoppingCart
