import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'

const whiteList = [
  'https://localhost:3000'
]

const corsOption = {
  origin: function(origin, callback){
    if(whiteList.indexOf(origin) !== -1 || !origin)
      callback(null, true)
      else{
        callback(new Error('Not allowed by CORS'))
      }
  }
}
const app = express()
dotenv.config()

app.use(express.urlencoded({extended: true}))

app.use('/users', userRoutes)
app.use('/tokens', tokenRoutes)
app.use('/', homeRoutes)



app.use(helmet())
app.use(cors(corsOption))

app.listen(process.env.APP_PORT, () => console.log(`servidor executando na porta 3000 ${process.env.APP_URL}`))
