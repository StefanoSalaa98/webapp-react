// import axios
import axios from "axios"

// import state e effetc
import { useState, useEffect } from "react"

// importo il componente card rating
import RatingCard from "../components/RatingCard"

// creo la pagina di RatingPage
const RatingPage = () => {

    // variabile di stato dei film
    const [movies, setMovies] = useState();

    // variabile di stato dei film ordinati per media voto recensioni
    const [ratingMovies, setRatingMovies] = useState();

    // chiamata axios per ricevere la lista dei film
    const fecthMovies = () => {
        axios.get('http://localhost:3000/api/movies/rating')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => { console.log(error) })
    }

    useEffect(() => {
        orderMovies();
    }, [movies]);

    const orderMovies = () => {
        // creo una copia dell'array movies con l'operatore spread [...]
        if (movies !== undefined) {
            const orderedMovies = [...movies].sort((a, b) => {
                // logica di ordinamento numerico decrescente
                return b.average_vote - a.average_vote;
            });
            // assegno ad ogni film la sua posizione corrispondente in classifica
            for (let i = 1; i <= orderedMovies.length; i++) {
                orderedMovies[i - 1].position = i;
                console.log(orderedMovies[i]);
                console.log(orderedMovies.length);
            }
            setRatingMovies(orderedMovies);
        }

    }

    // faccio partire la chiamata solo al primo montaggio del componente
    useEffect(fecthMovies, []);

    return (
        <>
            <h1 className="text-primary">Movies Rating</h1>
            <div className="rating row mt-3 ">
                {ratingMovies?.map(movie => (
                    <div key={movie.id} >
                        <RatingCard ratingProp={movie} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default RatingPage