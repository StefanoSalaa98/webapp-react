// import axios
import axios from "axios"

// import state e effetc
import { useState, useEffect } from "react"

// importo il componente card movie
import MovieCard from "../components/MovieCard"

// importo hook per il contesto
import { useGlobal } from "../contexts/globalContext"

// creo la pagina di HomePage
const HomePage = () => {

    // estrapolo dal context la variabile di stato
    const { setIsLoading } = useGlobal();

    // variabile di stato dei film
    const [movies, setMovies] = useState([]);

    // chiamata axios per ricevere la lista dei film
    const fecthMovies = () => {
        // appena entro nella funzione per la chiamata axios, attivo il loading 
        setIsLoading(true);
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data)
            })
            .catch(error => { console.log(error) })
            // terminata la chiamata axios, disattivo il loading
            .finally(() => { setIsLoading(false) })
    }

    // faccio partire la chiamata solo al primo montaggio del componente
    useEffect(fecthMovies, []);

    return (
        <>
            <h1 className="text-primary">Movies</h1>
            <div className="row row-cols-3 mt-4">
                {movies.map(movie => (
                    <div className="col" key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>
                ))}
            </div>
        </>

    )
}

export default HomePage