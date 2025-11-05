//importo le icone che mi servono
import { FaStar } from "react-icons/fa";
import { FaRegStar } from 'react-icons/fa';
import { FaStarHalfStroke } from "react-icons/fa6";

const CounterStar = (props) => {

    const { voteAverage, color } = props;

    // Calcolo il numero di stelle piene e di stelle vuote

    // Arrotondo per difetto la media voto per 2
    const vote = Math.floor(voteAverage * 2);
    // Arrotondo per difetto il numero di stelle piene
    const fullStars = Math.floor(vote / 2);
    // Se il voto è un numero dispari, allora aggiungo una stella piena a metà
    const halfStar = vote % 2 !== 0 ? 1 : 0;

    const emptyStars = 5 - fullStars - halfStar;

    // Creo array vuoti per il mapping da fare nel return
    // Array(N).fill(null) crea un array di N elementi nulli su cui potrò mappare
    const filledArray = Array(fullStars).fill(null);
    const emptyArray = Array(emptyStars).fill(null);
    const halfArray = Array(halfStar).fill(null);

    return (
        <>
            {filledArray.map(() =>
                < FaStar color={color} />
            )}
            {halfArray.map(() =>
                <FaStarHalfStroke color={color} />
            )}
            {emptyArray.map(() =>
                <FaRegStar color={color} />
            )}
        </>
    )
}

export default CounterStar