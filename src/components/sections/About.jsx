import Lottie from 'lottie-react'
import animationData from '../../assets/animations/property-dashboard.json'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About RentMaster</h2>
        <div className="about-content">
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To simplify property management through innovative technology solutions.</p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>To become the leading property management platform trusted by property managers worldwide.</p>
            </div>
          </div>

          <div className="about-animation">
            <Lottie 
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: '400px', margin: '3rem auto 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 