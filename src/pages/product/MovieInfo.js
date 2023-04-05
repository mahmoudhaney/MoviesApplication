import React from 'react';
import './style/MovieInfo.css'
import { Link, useLocation } from 'react-router-dom';

const MovieInfo = () => {
    const location = useLocation();
    return (
        <div className='movie-info'>
            <div className="container">
                <div className="imgSection">
                    <img src="https://picsum.photos/200" alt="Movie" />
                    <Link to={'/'}><button className='general-btn form-btn'>Download</button></Link>
                    <Link to={'/'}><button className='general-btn form-btn'>Watch Now</button></Link>
                </div>
                <div className="txtSection">
                    <h3>{location.state.name}</h3>
                    <p>ID: <b>{location.state.id}</b></p>
                    <p>Action / Adventure / Fantasy</p>
                    <div className='resolution'>
                        <Link to={'/'}>480p</Link>
                        <Link to={'/'}>720p</Link>
                        <Link to={'/'}>1080p</Link>
                        <Link to={'/'}>2160p</Link>
                    </div>
                    <div className="subtitles">
                        <Link to={'/'} className='subtitles'>Download Subtitles</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;