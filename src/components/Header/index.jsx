import { FaAngleDown } from 'react-icons/fa';
import headerImg from '../../assets/batabit.png';
import './style.scss';

function Header() {
  return (
    <header className="app-header">
      <div className="app-container">
        <div className="app-title">
          <img className="title-img" src={headerImg} alt="" />
          <p className="title-text">Batabit</p>
        </div>
        <p className="app-description">
          La próxima revolución en el intercambio de criptomonedas.
        </p>
        <p className="app-sub-description">
          Batatabit te ayuda a navegar entre los diferentes precios y
          tendencias.
        </p>
        <button className="app-button" type="button">
          Conoce Nuestros Planes
          <FaAngleDown />
        </button>
      </div>
    </header>
  );
}

export default Header;
