const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Property Manager",
      company: "Urban Living Properties",
      text: "RentMaster has completely streamlined our operations. The automated payment tracking alone has saved us countless hours each month. Their customer support team is always responsive and helpful.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      name: "Sarah Rodriguez",
      role: "Real Estate Investor",
      company: "Rodriguez Holdings",
      text: "As someone managing multiple properties, the reporting features are invaluable. I can track performance across my portfolio and make data-driven decisions. The mobile app is also a game-changer.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    },
    {
      name: "David Thompson",
      role: "Property Owner",
      company: "Thompson Properties",
      text: "The tenant communication features have improved our relationships significantly. Maintenance requests are handled efficiently, and the automated rent reminders have reduced late payments by 80%.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    }
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 