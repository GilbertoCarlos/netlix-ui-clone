const API_KEY = 'c76dacb7536f5142b2a032b26c56b2b6';
const API_BASE = 'https://api.themoviedb.org/3';

/*
Listas que serao usadas no Site
-originais netflix
-recomendados (trending)
-em alta (top rated)
-ação
-comedia
-terror
-romance
-documentarios
*/


//fazer um fatch em uma URL e retornar o JSON
//endpoint é a URL que será juntada com a base
//constante json recebe a requisicao de req e a funçao retorna esse valor
//Essa funcao faz as requisicoes 
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    //retorna a lista de cada categoria
    //async para aguardar o retorno da API antes de prosseguir
    getHomeList: async () => {
        return[
            //separaçao das categorias
            {
                slug: 'originals',
                title: 'Originais Netflix',
                itens: await basicFetch(`/discover/tv/?with_network=213&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                itens: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)  
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                itens: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'action',
                title: 'Ação',
                itens: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'animation',
                title: 'Animação',
                itens: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'horror',
                title: 'Terror',
                itens: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'romance',
                title: 'Romance',
                itens: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                itens: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`) 
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                itens: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`) 
            },
            
        ];
    },

    //buscar informaçoes de Uma filme em específico 
    //recebe o Id do filme ou serio e o tipo
    getMovieInfo: async (movieId, type) => {
        let info = {};

            if(movieId){
                switch(type){
                    case 'movie':
                        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                    case 'tv':
                        info= await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                }
            }



        return info;
    }
}