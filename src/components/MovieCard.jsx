// importo il router-dom per i link
import { Link } from "react-router-dom"

// creo il componente della lista dei film
const BookCard = () => {
    return (
        <div className="card mb-4">
            <img src="http://grupoalmuzara.com/libro/9788417954611_portada.jpg" alt="titolo film" />
            <div className="card-body">
                <h5 className="card-title">Titolo Film</h5>
                <address><i>Autore</i></address>
                <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat blanditiis magnam natus explicabo impedit eveniet hic nesciunt commodi praesentium, odio asperiores exercitationem et non nisi ipsam maxime fugiat perspiciatis?
                </p>
                <Link to="movies/1" className="btn btn-primary">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default BookCard