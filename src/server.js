import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import homeRoutes from './routes/homeRoutes.js'
import tokenRoutes from './routes/tokenRoutes.js'
import shoppingCartRoutes from './routes/shoppingCartRoutes.js'
import favoritesRoutes from './routes/favoritesRoutes.js'
import genresRoutes from './routes/genresRoutes'
import trailerRoutes from './routes/trailerRoutes'
import relatedMoviesRoutes from './routes/relatedMoviesRoutes'
import searchMovieRoutes from './routes/searchMovieRoutes'


const whiteList = [
  'http://localhost:3000',
  'http://localhost:4200'
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
app.use(express.json());
app.use(helmet())
app.use(cors(corsOption))

app.use('/users', userRoutes)
app.use('/tokens', tokenRoutes)
app.use('/shoppingCart', shoppingCartRoutes)
app.use('/favorites', favoritesRoutes)
app.use('/genres', genresRoutes)
app.use('/trailer', trailerRoutes)
app.use('/related', relatedMoviesRoutes)
app.use('/search', searchMovieRoutes)
app.use('/', homeRoutes)




app.listen(process.env.APP_PORT, () => console.log(`servidor executando na porta ${process.env.APP_PORT} ${process.env.APP_URL}`))
