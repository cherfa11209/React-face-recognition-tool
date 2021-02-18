import react from 'react'
import './ImageFinder.css'

const ImageFinder = () => {
    return(
        <div>
            <p className="instructions">Place an image of a human and we will detect the position of their face for you!</p>
            <div className="imagefinder">
            <input className="searchbar" type="search"></input>
            <button>Find Face</button>
            </div>
        </div>
    )
}

export default ImageFinder;