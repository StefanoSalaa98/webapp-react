// importo Outlet per la gestione dei componenti sulle rotte
import { Outlet } from "react-router-dom"

// importo il componente Header
import Header from "../components/Header"

// importo il componente loader
import Loader from "../components/Loader"

// importo hook per il contesto
import { useGlobal } from "../contexts/globalContext"

// creo componente di Layout DefaultLayout
const DefaultLayout = () => {

    // estrapolo dal context la variabile di stato
    const { isLoading } = useGlobal();

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {/* se var è true renderizza comp */}
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout