import './searchMovies.css';
import { useState, useEffect } from 'react';
import GetData from './GetData';
import { Link, useParams } from "react-router-dom";

//working pages

const SearchMovies = () => {

    let params = useParams()

    let queryText = "fight club"

    if ('query' in params) {
        queryText = params.query
    }

    console.log(queryText)

    const [query, setQuery] = useState(queryText)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState([])

    useEffect(async () => {
        window.scrollTo(0, 0)

        document.querySelector('#search').value = ""
        let url = "https://api.themoviedb.org/3/search/movie?api_key=86f237d170416093156de7affa43927e&language=en-US&"
        + "query=" + query + "&page=" + page + "&include_adult=false"
        let response = await GetData(url)
        let movies = response.results


        let movieElements = []

        //loop through the array of movies 
        movies.forEach((e, i) => {

            let currentPoster = e.poster_path
            
            if(currentPoster != null){
                currentPoster = "https://image.tmdb.org/t/p/w500" + e.poster_path
            } else {
                //when there is no poster image for a movie
                currentPoster = "img/no_image.png"
            }

            movieElements.push(
                <div className="movie">
                    <Link to={`/filminfo/${e.id}`} >
                        <img className="movie-poster" src={currentPoster} alt={e.title} />
                    </Link>
                    <p>{e.title}</p>
                </div>
            )            
        });
        if(!movieElements.length){
            // movieElements.push(<p>Inga resultat :(</p>)
            let el = "Din sökning gav inga resultat :("
            document.querySelector('.query').innerText = el 
        }
        
        setSearch(movieElements)
    }, [page])

    return (

        <section>
            <div className="search-container">
                <p className="query">Sökresultat: {query}</p>
                <div className="search-grid">
                    {search}
                </div>
            </div>
        </section>
    )
}

export default SearchMovies;