'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('users', [
    {
      name: 'Gustavo',
      email: 'gustavo@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Letícia',
      email: 'leticia@gmail.com',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },

  ], {});

  const users = await queryInterface.sequelize.query(
    'SELECT id FROM users'
  )
  const firstRow = users[0]
  console.log(firstRow[0].id);

  return await queryInterface.bulkInsert('shopping_carts', [
    {
      user_id: firstRow[0].id,
      shopping_cart: JSON.stringify({
        id: 1,
        name: "Matrix",
        imageURL: "qualquerImageURL",
        quant: 1,
        price: 10
      }),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: firstRow[0].id,
      shopping_cart: JSON.stringify({
        id: 10,
        name: "Matrix Revelations",
        imageURL: "qualquerImageURL",
        quant: 3,
        price: 40
      }),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: firstRow[1].id,
      shopping_cart: JSON.stringify({
        id: 2,
        name: 'Interestelar',
        imageURL: 'qualquerImageURL',
        quant: 2,
        price: 30
      }),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ])

},

  async down (queryInterface) {

    await queryInterface.bulkDelete('users', null, {});

  }
};
