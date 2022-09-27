import axios from 'axios'

let HomeAPI = {}

HomeAPI.index = async (req, res) => {
  try{
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=pt-Br&page=${req.params.page}`
    const trendingMovies = await axios(url)
    return res.send(await trendingMovies.data)
  }catch(e){
    console.log(e);
  }
}


HomeAPI.read = async (req, res) => {
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


HomeAPI.trailer = async (req, res) => {
  try{
      const url = `https://api.themoviedb.org/3/movie/${req.params.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
      const URLTrailer = await axios(url)
      const movieVideos = await URLTrailer.data
      const trailers = movieVideos.results?.filter(el => el.type === "Trailer")
      const key = movieVideos.results?.filter(el => el.type === "Trailer")[trailers.length - 1].key
      const trailerLink = `https://www.youtube.com/watch?v=${key}`
      return res.json(trailerLink)
  }catch(e){
    console.log(e);
  }
}


export default HomeAPI
