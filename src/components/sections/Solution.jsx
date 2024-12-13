import { FaCheckCircle, FaBuilding, FaUsers, FaChartBar, FaShieldAlt } from 'react-icons/fa';
import '../../styles/components/solution.css';
import digitalManagement from '../../assets/img/digital-management.jpeg';

const Solution = () => {
  const solutions = [
    {
      icon: <FaBuilding />,
      title: "Building Management",
      features: [
        "Track all financials in one place",
        "View detailed performance graphs",
        "Identify most profitable rooms",
        "Manage brokers effectively",
        "Track building expenses easily"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Tenant Handling",
      features: [
        "Keep tenant info organized",
        "Send automatic reminders",
        "Save important documents",
        "Track utility payments",
        "Streamlined communication"
      ]
    },
    {
      icon: <FaChartBar />,
      title: "Money Management",
      features: [
        "Track payments easily",
        "Store receipts safely",
        "View income in simple charts",
        "Calculate tax automatically",
        "Handle multiple currencies"
      ]
    },
    {
      icon: <FaShieldAlt />,
      title: "Team Control",
      features: [
        "Different access levels",
        "Everything backed up online",
        "Easy to use interface",
        "Track user activities",
        "Secure data management"
      ]
    }
  ];

  return (
    <section id="solution" className="solution">
      <div className="container">
        <h2>Transform Your Property Management</h2>
        <p className="section-description">Here's how RentMaster makes your life easier:</p>

        <div className="solution-content">
          <div className="solution-visual">
            <img 
              src={digitalManagement}
              alt="Digital Property Management"
              className="solution-image"
            />
          </div>

          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <ul>
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution; 