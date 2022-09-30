import Sequelize from "sequelize";
import User from "./User";
import databaseConfig from "../config/database";

const connection = new Sequelize(databaseConfig)

const Favorites = connection.define('favorites', {
  products: {
    type: Sequelize.JSON,
    defaultValue: '',
    allowNull: false,
    },
},
{},)

Favorites.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})

export default Favorites
