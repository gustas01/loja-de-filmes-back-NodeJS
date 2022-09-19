import axios from 'axios'

let genresController = {}

genresController.index = async (req, res) => {
  try{
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
    const trendingMovies = await axios(url)
    return res.send(await trendingMovies.data)
  }catch(e){
    console.log(e);
  }
}


export default genresController
