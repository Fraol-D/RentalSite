import Lottie from 'lottie-react'
import animationData from '../../assets/animations/property-dashboard.json'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About RentMaster</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To simplify property management through innovative technology solutions.</p>
            </div>
            <div className="about-animation">
              <Lottie 
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ width: '500px', height: '300px', margin: '0 auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 