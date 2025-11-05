// importo il componente per le stelle della media voto
import CounterStar from "../components/CounterStar"

// creo il componente per le recensioni di uno specifico film
const ReviewMovie = ({ reviewProp }) => {

    // destrutturo oggetto review
    const { name, vote, text } = reviewProp;

    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    {text}
                </p>
                <div className="stars">
                    <strong>Vote: {vote}</strong>
                    <div className="star-container">
                        <CounterStar voteAverage={vote} />
                    </div>
                </div>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default ReviewMovie