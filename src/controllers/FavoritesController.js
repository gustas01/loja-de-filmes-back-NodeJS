import Favorites from '../models/Favorites'
import User from '../models/User'

let favoritesController = {}

favoritesController.index = async (req, res) => {
  res.send("olá do controler no index Do Carrinho")
}


favoritesController.create = async (userId, res) => {
  try{
    await Favorites.create({
      user_id: userId,
      products: [],
      created_at: new Date(),
      updated_at: new Date(),
    })
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


favoritesController.read = async (req, res) => {
  try{
    // include = Inner Join das tabelas Favorites e users
    const favorites = await Favorites.findOne({
      include: [{
        model: User,
        required: true,
        where: {
          id: req.userId
        }
      }]
    })
    res.status(200).json(favorites.products)
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


favoritesController.update = async (req, res) => {
  try{
    const user = await User.findByPk(req.userId)

    if(!user)
      return res.status(404).json({errors: ["Usuário não encontrado"]})

    const actualFavorites = await Favorites.findOne({
        where: {
          user_id: req.userId
        },
      }
    )
    await actualFavorites.update({products: req.body})

    return res.status(200).json(actualFavorites.products)

  }catch(e){
    return res.status(400)
    .json({
      errors: e.errors.map(err => err.message)
    })
  }
}


favoritesController.delete = async (req, res) => {
  try{
    const user = await User.findByPk(req.userId)

    if(!user)
      return res.status(404).json({errors: ["Usuário não encontrado"]})

    const actualFavorites = await Favorites.findOne({
        where: {
          user_id: req.userId
        },
      }
    )
    await actualFavorites.update({products: [{}]})

    return res.status(200).json('carrinho limpo')

  }catch(e){
    return res.status(400)
    .json({
      errors: e.errors.map(err => err.message)
    })
  }
}



export default favoritesController
