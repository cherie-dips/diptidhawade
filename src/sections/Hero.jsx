import "../styles/hero.css";
import HeroAboutBlock from "../components/HeroAboutBlock.jsx";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="page-content hero-inner">
        <div className="hero-text-col">
          <HeroAboutBlock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
