import User from '../models/User'

let homeController = {}

homeController.index = async (req, res) => {
  res.status(200).json({tudCerto: true})
}


homeController.create = async (req, res) => {
  res.send("olá do controler no create")
}


homeController.read = async (req, res) => {
  res.send("olá do controle no read")
}


homeController.update = async (req, res) => {
  res.send("olá do controle no update")
}


homeController.delete = async (req, res) => {
  res.send("olá do controle no delete")
}



export default homeController
