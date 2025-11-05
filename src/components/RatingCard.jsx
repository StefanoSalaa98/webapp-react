// importo il componente per le stelle della media voto
import CounterStar from "../components/CounterStar"

// creo il componente per le recensioni di uno specifico film
const RatingCard = ({ ratingProp }) => {

    // destrutturo oggetto review
    const { title, director, genre, image, average_vote, position } = ratingProp;

    // assegno le classi alla card in base anche alla posizione in classifica del film
    const classiRating = `card mb-4 ${position === 1 ? "first" : position === 2 ? "second" : position === 3 ? "third" : ""}`

    console.log(ratingProp);

    return (
        <div className={classiRating} >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{director}</i></address>
                <div className="stars">
                    <strong>Vote: {average_vote}</strong>
                    <div className="star-container">
                        <CounterStar voteAverage={average_vote} color="black" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RatingCard 