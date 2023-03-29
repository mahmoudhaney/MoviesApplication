import React from 'react';
import '../style/ProductCard.css'
const ProductCard = (props) => {
    return (
        <div className="productCard">
            <div className="card-img">
                <img src={props.image} alt="Movie" />
            </div>
            <div className="card-info">
                <h4 className='title'>{props.name}</h4>
                <p className="description">{props.description}</p>
                <button>Watch Now</button>
            </div>
        </div>
    );
};

export default ProductCard;