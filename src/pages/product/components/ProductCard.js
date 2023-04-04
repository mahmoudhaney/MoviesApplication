import React from 'react';
import { Link } from 'react-router-dom';
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
                <button>
                    <Link 
                        to={"/movie-info/" + Number(props.id)}
                        state={{id:props.id,name:props.name}}
                    >
                        Watch Now
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;