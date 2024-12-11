import { FaBuilding, FaUsers, FaChartLine, FaUsersCog } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBuilding />,
      title: "Building Management",
      points: [
        "Keep track of all financials in one place",
        "View detailed performance graphs",
        "Identify most profitable rooms",
        "Manage brokers effectively",
        "Track building expenses easily"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Money Management",
      points: [
        "Track payments easily",
        "Store receipts safely",
        "See income in simple charts",
        "Calculate tax automatically",
        "Exchange between different currencies"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Tenant Handling",
      points: [
        "Keep tenant info organized",
        "Send automatic reminders",
        "Save important documents",
        "Track utility payments"
      ]
    },
    {
      icon: <FaUsersCog />,
      title: "Team Control",
      points: [
        "Different access levels",
        "Everything backed up online",
        "Easy to use for everyone",
        "Track who does what"
      ]
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Core Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <ul className="feature-list">
                {feature.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="try-now-section">
          <h3>Experience These Features Now</h3>
          <p>Take a guided tour of RentMaster and see how it can transform your property management</p>
          <a href="/tryout" className="try-now-btn">Try It Out Now</a>
        </div>
      </div>
    </section>
  );
};

export default Features; 