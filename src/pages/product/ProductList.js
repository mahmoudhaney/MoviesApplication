import React, {useState, useEffect} from 'react';
import EmptyProducts from './components/EmptyProducts.js';
import ProductCard from './components/ProductCard';
import './style/ProductList.css';

const ProductList = () => {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/movies").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    const displayMovies = () => {
        if (backendData.length === 0) {
            return <EmptyProducts/>;
        }
        else {
            return (
                <div className="productList section-padding">
                    <div className="container">
                        {
                            backendData.map((movie) => {
                                return <ProductCard 
                                        key={movie.ID}
                                        id={movie.ID}
                                        name={movie.Name}
                                        description={movie.Description}
                                        image={movie.Image}
                                />;
                            })
                        }
                    </div>
                </div>
            );
        }
    };
    return displayMovies();
    
};

export default ProductList;