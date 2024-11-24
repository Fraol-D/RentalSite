const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Property Manager",
      company: "Smith Properties",
      text: "RentMaster has transformed how we manage our properties. The automation features save us hours every week.",
      image: "/testimonials/john.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Landlord",
      company: "Johnson Real Estate",
      text: "The reporting features are incredible. I can see all my properties' performance at a glance.",
      image: "/testimonials/sarah.jpg"
    },
    {
      name: "Mike Williams",
      role: "Property Owner",
      company: "Williams Holdings",
      text: "Customer support is outstanding. Any issues are resolved quickly and professionally.",
      image: "/testimonials/mike.jpg"
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
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 