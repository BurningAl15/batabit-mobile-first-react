import PriceCard from './PriceCard';
import './style.scss';

function Section4() {
  return (
    <section className="section-4">
      <div className="section-4-container">
        <p className="section-4-title">
          Escoge el plan que mejor se ajuste a ti.
        </p>
        <p className="section-4-description">
          Cualquier plan te da acceso completo a nuestra plataforma.
        </p>
        <PriceCard />
      </div>
    </section>
  );
}
export default Section4;
