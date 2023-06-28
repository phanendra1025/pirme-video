// Write your code here
import './index.css'

import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <div className="thumbnail-container">
          <button type="button" className="thumbnail-button">
            <img
              src={thumbnailUrl}
              alt="thumbnail"
              className="thumbnail-item"
            />
          </button>
        </div>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            data-testid="closeButton"
            className="close-button"
            onClick={close}
          >
            <IoMdClose size="25" />
          </button>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
