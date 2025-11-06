import './App.css'

// importo le pagine
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import NotFoundPage from './pages/NotFoundPage'
import RatingPage from './pages/RatingPage'
// importo il layout
import DefaultLayout from './layouts/DefaultLayout'

// importo gli elementi React per la gestione del router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// importoil provider context globale
import { GlobalProvider } from './contexts/globalContext'

function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/movies/:id' element={<MoviePage />} />
              <Route path='/rating' element={<RatingPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
