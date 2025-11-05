// importo il router-dom per la gestione dei link
import { Link } from "react-router-dom"

// creo il componente Header
const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container-fluid justify-content-start">
                {/* se premuto torna alla Home */}
                <Link className="navbar-brand" to="/">Movies</Link>
                <Link className="navbar-brand" to="/rating">Movies Rating</Link>
            </div>
        </nav>
    )
}

export default Header