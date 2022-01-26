import './style.scss';
import DataCard from './DataCard';

function Section2() {
  return (
    <section className="section-2">
      <div className="section-2-container">
        <p className="section-2-title">Creamos un producto sin comparación.</p>
        <p className="section-2-description">Confiable y diseñado para su uso diario.</p>
        <DataCard icon={0} title="Tiempo real" description="Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento." />
        <DataCard icon={1} title="No hay tasas escondidas" description="Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo." />
        <DataCard icon={2} title="Compara monedas" description="No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual." />
        <DataCard icon={3} title="Información confiable" description="Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan." />
      </div>
    </section>
  );
}
export default Section2;
