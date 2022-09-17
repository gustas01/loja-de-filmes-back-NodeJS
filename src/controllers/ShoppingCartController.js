import ShoppingCart from '../models/ShoppingCart'
import User from '../models/User'

let shoppingCartController = {}

shoppingCartController.index = async (req, res) => {
}


shoppingCartController.create = async (req, res) => {
  res.send("olá do controler no create Do Carrinho")
}


shoppingCartController.read = async (req, res) => {
  try{
    const shoppingCart = await ShoppingCart.findOne({
      include: [{
        model: User,
        required: true,
        where: {
          id: req.userId
        }
      }]
    })
    res.status(200).json(shoppingCart)
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


shoppingCartController.update = async (req, res) => {
  try{
    const user = await User.findByPk(req.userId)

    if(!user)
      return res.status(404).json({errors: ["Usuário não encontrado"]})

    const actualShoppingCart = await ShoppingCart.findOne({
        where: {
          user_id: req.userId
        },
      }
    )
    await actualShoppingCart.update({shoppingCart: [req.body]})

    return res.status(200).json(actualShoppingCart.shoppingCart)

  }catch(e){
    return res.status(400)
    .json({
      errors: e.errors.map(err => err.message)
    })
  }
}


shoppingCartController.delete = async (req, res) => {
  try{
    const user = await User.findByPk(req.userId)

    if(!user)
      return res.status(404).json({errors: ["Usuário não encontrado"]})

    const actualShoppingCart = await ShoppingCart.findOne({
        where: {
          user_id: req.userId
        },
      }
    )
    await actualShoppingCart.update({shoppingCart: []})

    return res.status(200).json('carrinho limpo')

  }catch(e){
    return res.status(400)
    .json({
      errors: e.errors.map(err => err.message)
    })
  }
}



export default shoppingCartController
