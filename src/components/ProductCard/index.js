import './style.css';
import Image from '../../assets/paper-3155438_1280.jpg';

export default function ProductCard({ product: { name, description, price } }) {
    return (
        <div className='card'>
            <img src={Image} alt='product' />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>R$ {price}</p>
            </div>
            <button>Comprar</button>
        </div>
    );
}