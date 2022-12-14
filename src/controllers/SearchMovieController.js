import axios from 'axios'

let SearchMovieController = {}



SearchMovieController.searchMovieByName = async (req, res) => {
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


SearchMovieController.searchMovieById = async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
  const response = await (await axios(url)).data
  return res.json(response)
}


export default SearchMovieController
