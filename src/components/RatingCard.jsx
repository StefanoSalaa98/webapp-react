// importo il componente per le stelle della media voto
import CounterStar from "../components/CounterStar"

// importo icone podio
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";

// creo il componente per le recensioni di uno specifico film
const RatingCard = ({ ratingProp }) => {

    // destrutturo oggetto review
    const { title, director, genre, image, average_vote, position } = ratingProp;

    // assegno le classi alla card in base anche alla posizione in classifica del film
    const classiRating = `card mb-4 ${position === 1 ? "first" : position === 2 ? "second" : position === 3 ? "third" : ""}`

    return (
        <div className={classiRating} >
            <div className="card-rating card-body">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <address><i>{director}</i></address>
                    <div className="stars">
                        <strong>Vote: {average_vote}</strong>
                        <div className="star-container">
                            <CounterStar voteAverage={average_vote} color="black" />
                        </div>
                    </div>
                </div>
                {position <= 3 && <div>
                    {position === 1 && <GiPodiumWinner className="podium" />}
                    {position === 2 && <GiPodiumSecond className="podium" />}
                    {position === 3 && <GiPodiumThird className="podium" />}
                </div>
                }
            </div>
        </div >
    )
}

export default RatingCard 