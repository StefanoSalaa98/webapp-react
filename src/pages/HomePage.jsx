// importo il componente card libro
import MovieCard from "../components/MovieCard"

// creo la pagina di HomePage
const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Movies</h1>
            <div className="row row-cols-3 mt-4">
                {/* La lista dei film verrà inserita qui */}
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>

    )
}

export default HomePage