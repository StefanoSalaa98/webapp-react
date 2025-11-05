// import axios
import axios from "axios";

// import state react
import { useState } from "react"

// creo componente form per l'inserimento di una nuova recensione
const ReviewForm = ({ idProp, reloadReviews }) => {

    const delfaultName = "Anonymous";

    // imposto i valori iniziali dell'oggetto dei campi del form
    const initialValues = {
        name: delfaultName,
        vote: 1,
        text: ""
    }

    // imposto lo stato iniziale della variabile di stato che conterrà i dati del form
    const [formData, setFormData] = useState(initialValues);

    // funzione di gestione valori dei campi
    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // creo la url per l'endpoint che richiede l'inserimento di una nuova recensione
    const apiUrl = `http://localhost:3000/api/movies/${idProp}/reviews`;

    // funzione invio dati
    const handleSubmit = e => {
        // prevengo l'invio del form
        e.preventDefault();
        console.log(formData);
        // chiamata per la funzione storeReview
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // imposto il form ai valori iniziali
                setFormData(initialValues)
                // richiamo la funzione per la chiamata axios passata dal componente padre
                reloadReviews();
            })
            .catch((err) => console.log(err))
    }

    // Funzione per cancellare il testo quando l'input riceve il focus
    const clearInput = () => {
        if (formData.name === delfaultName) {
            setFormData({ ...formData, "name": '' });
        }
    }

    // Funzione per ripristinare il testo se l'utente lascia il campo vuoto
    const restoreInput = () => {
        if (formData.name === '') {
            setFormData({ ...formData, "name": delfaultName });
        }
    }

    return (
        <div className="card">
            <header className="card-header">
                <h5>Add your review</h5>
            </header>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} onFocus={clearInput} onBlur={restoreInput} />
                    </div>
                    <div className="form-group">
                        <label>Vote (RANGE 1-5)</label>
                        <input name="vote" type="number" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm