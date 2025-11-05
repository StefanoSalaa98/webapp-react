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



function App() {
  return (
    <>
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
    </>
  )
}

export default App
