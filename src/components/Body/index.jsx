import './style.scss';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';

function Body() {
  return (
    <main className="body-container">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
export default Body;
