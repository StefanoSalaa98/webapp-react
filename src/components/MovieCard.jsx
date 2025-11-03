// importo il router-dom per i link
import { Link } from "react-router-dom"

// creo il componente card del film
const BookCard = () => {
    return (
        <div className="card mb-4">
            <img src="https://c8.alamy.com/compit/2c4x052/inception-2010-diretto-da-christopher-nolan-e-con-leonardo-dicaprio-joseph-gordon-levitt-ellen-page-tom-hardy-e-ken-watanabe-una-squadra-si-rompe-al-subconscio-di-un-uomo-d-affari-usando-la-tecnologia-di-condivisione-di-sogno-per-piantare-un-seme-per-influenzare-la-sua-decisione-nel-mondo-reale-2c4x052.jpg" alt="titolo film" />
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