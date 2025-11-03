// creo il componente per le recensioni di uno specifico film
const ReviewMovie = () => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <p className="card-text">
                    testo della recensione
                </p>
                <strong>Vote: 5</strong>
                <address><i>By nome utente</i></address>
            </div>
        </div>
    )
}

export default ReviewMovie