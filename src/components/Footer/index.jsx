import './style.scss';
import LogoImg from '../../assets/batabit.png';

function Footer() {
  return (
    <footer>
      <div className="links-container">
        <a href="https://www.linkedin.com">Linkedin</a>
        <a href="https://www.crunchbase.com">Crunchbase</a>
        <a href="https://thehackernews.com">HackerNews</a>
      </div>
      <div className="logo-container">
        <img src={LogoImg} alt="" />
        <p>® Batatabit 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
