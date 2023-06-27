// Write your code here

import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  console.log(actionMoviesList)
  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-video-image"
      />
      <div className="action-movies-container">
        <h1 className="movies-category">Action Movies</h1>
        <div className="movies-slider-container">
          <MoviesSlider moviesList={actionMoviesList} />
        </div>
      </div>
      <div className="action-movies-container">
        <h1 className="movies-category">Comedy Movies</h1>
        <div className="movies-slider-container">
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
