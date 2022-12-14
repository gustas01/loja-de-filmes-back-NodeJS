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


HomeAPI.trailer = async (req, res) => {
  try{
      let url = `https://api.themoviedb.org/3/movie/${req.params.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`

      let URLTrailer = await (await axios(url)).data
      let trailers = URLTrailer.results?.filter(el => el.type === "Trailer")

      //esse if é executado caso o filme não tenha trailer em português, aí procuro em inglês mesmo
      if(!trailers.length){
        url = `https://api.themoviedb.org/3/movie/${req.params.movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        URLTrailer = await (await axios(url)).data
        trailers = URLTrailer.results?.filter(el => el.type === "Trailer")
      }

      const key = URLTrailer.results?.filter(el => el.type === "Trailer")[trailers.length - 1].key
      const trailerLink = `https://www.youtube.com/watch?v=${key}`
      return res.json(trailerLink)
  }catch(e){
    console.log(e);
  }
}


HomeAPI.relatedMovies = async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`
  const response = await (await axios(url)).data
  return res.json(response)
}



export default HomeAPI
