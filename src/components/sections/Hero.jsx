import '../../styles/components/hero.css'
import HeroBg from '../../assets/img/HeroBg.jpg'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img 
          src={HeroBg}
          alt="Modern Building"
          className="hero-bg-image"
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Property Management Experience</h1>
          <p>Streamline operations, boost efficiency, and delight your tenants</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Hero 