// importo Outlet per la gestione dei componenti sulle rotte
import { Outlet } from "react-router-dom"

// importo il componente Header
import Header from "../components/Header"


// creo componente di Layout DefaultLayout
const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout