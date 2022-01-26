import './style.scss';
import { FaArrowRight } from 'react-icons/fa';

function PriceCard() {
  return (
    <div className="price-card">
      <p className="price-card-title">Pago Anual</p>
      <div className="price-card-container">
        <p className="price-card-dollar">$</p>
        <p className="price-card-price">99</p>
      </div>
      <p className="price-card-description">
        *Ahorras $129 comparado al plan mensual.
      </p>
      <button type="button" className="price-card-button">
        Escoger este
        <FaArrowRight />
      </button>
    </div>
  );
}
export default PriceCard;
