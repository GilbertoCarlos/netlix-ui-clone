import React from 'react';
import './Header.css';

export default ({black}) =>{
    return(
        //recebe o state de black para saber se vai ou nao ocultar o header (app.js)
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://www.pngkey.com/png/full/312-3128144_ryuko-by-tasselcat-anime-profile-pictures-for-steam.png" alt="Usuário" />
                </a>
            </div>
        </header>


    );
}