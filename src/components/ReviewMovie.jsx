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
                <strong>Vote: {vote}
                    <CounterStar voteAverage={vote} />
                </strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default ReviewMovie