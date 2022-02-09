import React, {useEffect, useState} from "react";
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from "./Components/MovieRow";
import FeaturedMovie from "./Components/FeaturedMovie";
import Header from "./Components/Header";

export default () =>{
  
   //criar lista com filmes[movieList] e salvar informacoes[setMovieList]
  const [movieList, setMovieList] = useState([]);

  //criar um estado de filme em destaque
  const [featuredData,setFeatureData] = useState([]);

  //buscar a posicao da tela para oculta o header
  const [blackHeader, setBlackHeader] = useState([]);

  useEffect(()=>{
  
    //cria uma funcao que carrega todas as informacoes da API
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      //armazenar lista (estado)
      setMovieList(list);

      //pegando o Filme em destaque (FeatureMovie)
      let originals = list.filter(i=>i.slug ==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1))
      let chosen = originals[0].itens.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeatureData(chosenInfo);
     

    }

    loadAll();

  }, []);

  //monitora o scroll
  useEffect(()=>{
      const scrollListener = () => {
      
        if(window.scrollY > 10 ){
          setBlackHeader(true);
        }else{
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      }

  },[]);
  
 
 
 
  return (
    //montando a pagina
    //Header
    //Featured (destaque)
    //separa as sessoes
    //map para buscar todos os itens de uma determinado tag
    <div className="page">
        <Header black={blackHeader}/>
        
        {featuredData &&
          <FeaturedMovie item={featuredData}/>
        } 

        <section className="lists">
            {movieList.map((item,key) =>(
              <MovieRow key={key} title={item.title} items={item.itens}/>
            ))}
        </section>

        <footer>
          Desenvolvido por Gilberto Carlos ® <br/>
          Direitos de Imagem para Netflix<br/>
          Dados originados de: Themoviedb.org API
        </footer>
        
        {movieList.length <= 0 &&
                <div className="loadind">
                  <img src="https://www.rchandru.com/images/portfolio/modals/m-loading.gif" alt="loading" />
              </div>
        }


    </div>
  );


}
