function randomMovies(movies){
  const random = Math.floor(Math.random() * movies.length)
  return movies[random]
}