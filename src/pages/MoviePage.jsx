// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams } from "react-router-dom"
// useParams mi permette di leggere il paramanetro dinamico per capire quale film devo caricare

// import state e effetc
import { useState, useEffect } from "react"

// importo il componente per le recensioni di uno specifico film
import ReviewMovie from "../components/ReviewMovie"

/// creo la pagina del singolo film
const MoviePage = () => {

    // variabile di stato del singolo film
    const [movie, setMovie] = useState();

    // recupero il parametro dinamico grazie a useParams
    const { id } = useParams();

    // prepariamo funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3000/api/movies/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => { console.log(error) })
    }

    // faccio partire la chiamata solo al primo montaggio del componente
    useEffect(fecthMovie, []);

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={movie?.image} alt={movie?.title} />
                </div>
                <h1>{movie?.title}</h1>
                <h3 className="text-muted"><i>By {movie?.director}</i></h3>
                <p>{movie?.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center">
                    <h4>Our community reviews</h4>
                </header>
                {movie?.reviews.map(review => (
                    <ReviewMovie reviewProp={review} key={review.id} />
                ))}


            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default MoviePage