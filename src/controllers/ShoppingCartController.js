import ShoppingCart from '../models/ShoppingCart'
import User from '../models/User'

let shoppingCartController = {}

shoppingCartController.index = async (req, res) => {
}


shoppingCartController.create = async (req, res) => {
  res.send("olá do controler no create Do Carrinho")
}


shoppingCartController.read = async (req, res) => {
  const shoppingCart = await ShoppingCart.findAll({
    include: [{
      model: User,
      required: true,
      where: {
        id: req.params.id
      }
    }]
  })
  res.status(200).json(shoppingCart)
}


shoppingCartController.update = async (req, res) => {
  res.send("olá do controle no update Do Carrinho")
}


shoppingCartController.delete = async (req, res) => {
  res.send("olá do controle no delete Do Carrinho")
}



export default shoppingCartController
