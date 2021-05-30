import React from 'react'
import './ImageCard.css'

const ImageCard = (props) => {
    console.log(props.images);

    return (
        <div className="images">
            {props.images.map(img => <img key={img.id} alt="searched result" src={img.urls.regular} />)}
        </div>
    );
}

export default ImageCard;