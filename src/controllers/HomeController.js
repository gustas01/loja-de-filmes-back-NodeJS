import axios from 'axios'

let homeController = {}

homeController.index = async (req, res) => {
  try{
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=pt-Br&page=${req.params.page}`
    const trendingMovies = await axios(url)
    return res.send(await trendingMovies.data)
  }catch(e){
    console.log(e);
  }
}


homeController.read = async (req, res) => {
  try{
    if(req.params.movieNameSearch){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&query=${req.params.movieNameSearch}&page=${req.params.pageFromSearchedMovie}`
      const searchedMovies = await axios(url)
      return res.send(await searchedMovies.data)
    }
  }catch(e){
    console.log(e);
  }
}


export default homeController
