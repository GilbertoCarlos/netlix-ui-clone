import React, {useState} from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from './img/arrow_back.png';
import NavigateNextIcon from './img/arrow_forward.png';

//recebe como parametro os itens do componete enviado pelo APP.js
export default ({title, items}) =>{
    //armazenar o movimento da lista
    const [scrollX, setScrollX] = useState(0);

      //realiza o calculo para movimentar a lista para esquerda
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth/2);

        if(x > 0){
            x = 0; 
        }
        
        setScrollX(x);
    }

    //realiza o calculo para movimentar a lista para direita
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth/2);
        let listW = items.results.length * 150; 

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW)-60; 
        }
        
        setScrollX(x)
    }

    

    return (
        <div className="movieRow">
          <h1>{title}</h1>
    
          <div className="movieRow--left" onClick={handleLeftArrow}>
            <img src={NavigateBeforeIcon} alt="Back" width="50"/>	
          </div>
          
          <div className="movieRow--right" onClick={handleRightArrow}>
            <img src={NavigateNextIcon} alt="Next" width="50"/>
          </div>
          
          <div className="movieRow--listarea">
            <div className="movieRow--list" style={{
                marginLeft: scrollX,
                width: items.results.length * 150
            }}>
                {items.results.length > 0 && items.results.map((item,key)=>
                    <div  key={key} className="movieRow--item">
                       <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.ogiginal_title}/> 
                    </div>
                )}
            </div>  


          </div>
        </div>
    );

}
