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
                    <Link to={'/'}><button>Download</button></Link>
                    <Link to={'/'}><button>Watch Now</button></Link>
                </div>
                <div className="txtSection">
                    <h3>{location.state.name}</h3>
                    <p>ID: <b>{location.state.id}</b></p>
                    <p>Action / Adventure / Fantasy</p>
                    <div>
                        <Link to={'/'}>720p.WEB</Link>
                        <Link to={'/'}>1080p.WEB</Link>
                        <Link to={'/'}>2160p.WEB</Link>
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