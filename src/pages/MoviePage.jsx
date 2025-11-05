// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom"
// useParams mi permette di leggere il paramanetro dinamico per capire quale film devo caricare

// import state e effetc
import { useState, useEffect } from "react"

// importo il componente per le recensioni di uno specifico film
import ReviewMovie from "../components/ReviewMovie"

// importo il componente per le stelle della media voto
import CounterStar from "../components/CounterStar"

/// creo la pagina del singolo film
const MoviePage = () => {

    // creo istanza di Navigate
    const redirect = useNavigate();

    // variabile di stato del singolo film
    const [movie, setMovie] = useState();

    // recupero il parametro dinamico grazie a useParams
    const { id } = useParams();

    // prepariamo funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3000/api/movies/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => {
                console.log(error)
                if (error.status === 404) redirect('/404')
            })
    }

    // faccio partire la chiamata solo al primo montaggio del componente
    useEffect(fecthMovie, []);

    return (
        <>
            <header id="movie" className="border-bottom border-1 mb-3">
                <div className=" image-film d-flex mb-3">
                    <img src={movie?.image} alt={movie?.title} />
                </div>
                <div className="info">
                    <h1>{movie?.title}</h1>
                    <h3 className="text-muted"><i>By {movie?.director}</i></h3>
                    <p>{movie?.abstract}</p>
                </div>
            </header>
            <section id="reviews">
                <header className="review-title d-flex justify-content-between align-items-center">
                    <h4>Our community reviews</h4>
                    <div className="stars">
                        <strong>Average: </strong>
                        <div className="star-container">
                            {movie?.average_vote && <CounterStar voteAverage={movie?.average_vote} />}
                        </div>
                    </div>
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