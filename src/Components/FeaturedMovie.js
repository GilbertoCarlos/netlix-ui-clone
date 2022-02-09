import React from 'react';
import './FeaturedMovie.css';


//componente do filme em destaque
//manipulaçoes em ano e lista de generos
export default ({item}) => {
    //manipulando data, trazendo direto do item
    let firstDate = new Date(item.first_air_date);
    //manipulando o genero
    let genres =[];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }
    
    //captura a descição para que seja possivel tratar seu tamanho
    let description = `${item.overview}`;

    if(description.length >= 200){
        description = description.substring(0,200)+'...';
    }


    return(
        <section className='featured' style={{
            backgroundSize:'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

            }}>

            
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div> 
                    <div className="featured--description">{description }</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton">► Assistir</a>
                        <a href={`/list/${item.id}`} className="feature--mylistbutton">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Generos: </strong>{genres.join(', ')}</div>
                </div>
                
            </div>



        </section>
    )


}