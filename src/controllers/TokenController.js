import User from '../models/User'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

let tokenController = {}

tokenController.create = async (req, res) => {
  const  { email = '', password = '' } = req.body

  if(!email || !password){
    return res.status(401).json({
      errors: ['Credenciais inválidas']
    })
  }

  const user = await User.findOne({
    where: {
      email
    }
  })

  if(!user){
    return res.status(401).json({
      errors: ['Usuário não encontrado']
    })
  }

  if(!(await bcryptjs.compare(password, user.password_hash))){
    return res.status(401).json({
      errors: ['Senha inválida']
    })
  }

  const { id, name } = user
  const token = jwt.sign({id, name, email}, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION
  })
  res.send({token})
}


export default tokenController
