// importo il router-dom per i link
import { Link } from "react-router-dom"

// creo il componente card del film
const BookCard = ({ movieProp }) => {

    // destrutturiamo oggetto passato da props
    const { id, title, director, genre, release_year, abstract, image, created_at, updated_at } = movieProp;

    return (
        <div className="card mb-4">
            <img src={image} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <address><i>{director}</i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`movies/${id}`} className="btn btn-primary">
                    See more
                </Link>

            </div>
        </div>
    )
}

export default BookCard