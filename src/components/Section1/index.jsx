import './style.scss';
import BitcoinImg from '../../assets/Bitcoin.png';
import UpTrend from '../../assets/trending-up.svg';
import DownTrend from '../../assets/trending-down.svg';

function Section1() {
  return (
    <section className="section-1">
      <img className="section-1-img" src={BitcoinImg} alt="" />
      <p className="section-1-title">
        Visibilizamos todas las tasas de cambio.
      </p>
      <p className="section-1-description">
        Traemos información en tiempo real de las casas de cambio y las monedas
        más importantes del mundo.
      </p>
      <div className="section-1-table-container">
        <p className="section-1-coins">Monedas</p>
        <table>
          <tbody>
            <tr>
              <td>Bitcoin</td>
              <td className="price">
                $1.96
                <img src={DownTrend} alt="" />
              </td>
            </tr>
            <tr>
              <td>Ethereum</td>
              <td className="price">
                $0.07
                <img src={UpTrend} alt="" />
              </td>
            </tr>
            <tr>
              <td>Ripple</td>
              <td className="price">
                $2.15
                <img src={DownTrend} alt="" />
              </td>
            </tr>
            <tr>
              <td>Stellar</td>
              <td className="price">
                $4.96
                <img src={DownTrend} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section-1-update-time">Actualizado: 19 Julio 23:45</div>
    </section>
  );
}
export default Section1;
