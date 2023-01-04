import User from '../models/User'
import shoppingCartController from './ShoppingCartController'
import FavoritesController from './FavoritesController'

let userController = {}

userController.index = async (req, res) => {
 try{
  const users = await User.findAll({attributes: ['id', 'name', 'email']})
  return res.json(users)
 }catch(e){
  return res.status(400).json({
    errors: e.errors.map(err => err.message)
  })
 }
}


userController.create = async (req, res) => {
  try{
    const { password } = req.body

    if (!((/[A-Z]/).test(password) && ((/[a-z]/).test(password))))
      return res.status(400).json({errors: ["A senha deve ter pelo menos 1 letra maiúscula e 1 minúscula"]})

    const novoUser = await User.create(req.body)
    const {id, name, email} = novoUser
    shoppingCartController.create(id)
    FavoritesController.create(id)

    return res.json({msg: "Usuário criado com sucesso!"})
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.read = async (req, res) => {
  try{
    if(!req.params.id){
      return res.status(400).json({errors: ["ID não enviado"]})
    }

    const user = await User.findByPk(req.params.id)

    if(!user){
      return res.status(404).json({errors: ["Usuário não existe"]})
    }

    return res.status(200).json({id: user.id, name: user.name, email: user.email})
  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.update = async (req, res) => {
  try{
    const { password } = req.body

    if (!((/[A-Z]/).test(password) && ((/[a-z]/).test(password))))
      return res.status(400).json({errors: ["A senha deve ter pelo menos 1 letra maiúscula e 1 minúscula"]})


    const user = await User.findByPk(req.userId)

    if(!user){
      return res.status(404).json({errors: ["Usuário não encontrado"]})
    }

    const userUpdated = await user.update(req.body)
    // const {id, name, email} = userUpdated
    return res.status(200).json({msg: "Usuário atualizado com sucesso!"})

  }catch(e){
    return res.status(400).json({
      errors: e.errors.map(err => err.message)
    })
  }
}


userController.delete = async (req, res) => {
  try{
    const user = await User.findByPk(req.userId)

    if(!user){
      return res.status(404).json({errors: ["Usurário não encontrado"]})
    }

    //1ª forma de fazer
    User.destroy({
      where: {
        id: req.userId
    }})

    //2ª forma de fazer
    // await user.destroy()

    return res.status(200).json('usuário deletado')
  }catch(e){
    console.log(e)
    return res.status(200).json({
      errors: e.errors.map(err => err.message)
    })
  }
}



export default userController
