import React from 'react';
import { data } from '../../core/data/movies.js';
import EmptyProducts from './components/EmptyProducts.js';
import ProductCard from './components/ProductCard';
import './style/ProductList.css';

const ProductList = () => {
    const movies = data;
    const displayMovies = () => {
        if (movies.length === 0) {
            return <EmptyProducts/>;
        }
        else {
            return (
                <div className="productList">
                    <div className="container">
                        {
                            movies.map((movie) => {
                                return <ProductCard 
                                        key={movie.id} 
                                        name={movie.name}
                                        description={movie.description}
                                        image={movie.image}
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