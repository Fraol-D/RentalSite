import { FaExclamationTriangle, FaClock, FaChartLine, FaFolder, FaFileAlt, FaDatabase } from 'react-icons/fa';
import '../../styles/components/pain-points.css';
import stressedManager from '../../assets/img/stressed-manager.jpg';
import paperworkChaos from '../../assets/img/paperwork-chaos.jpg';

const PainPoints = () => {
  const painPoints = [
    {
      icon: <FaFileAlt />,
      title: "Manual Tracking Headaches",
      description: "Juggling spreadsheets, paper records, and multiple tools to track tenant payments, leading to errors and confusion."
    },
    {
      icon: <FaClock />,
      title: "Late Payment Issues",
      description: "Without automated reminders, tenants miss rent deadlines, requiring time-consuming manual follow-ups."
    },
    {
      icon: <FaChartLine />,
      title: "Missed Opportunities",
      description: "Lack of performance tracking makes it difficult to spot trends, address issues, or make informed decisions."
    },
    {
      icon: <FaFolder />,
      title: "Disorganized Records",
      description: "Tenant contracts, receipts, and important documents scattered across different folders, making retrieval difficult."
    },
    {
      icon: <FaFileAlt />,
      title: "Time-Consuming Reports",
      description: "Manual compilation and analysis of income and expenses takes valuable time away from growing your business."
    },
    {
      icon: <FaDatabase />,
      title: "Risk of Data Loss",
      description: "Physical file storage and limited backup systems put important property documents at risk of loss or damage."
    }
  ];

  return (
    <section id="pain-points" className="pain-points">
      <div className="container">
        <h2>The Struggles of Managing Rental Properties</h2>
        <p className="section-description">Here's what you might be facing right now:</p>
        
        <div className="pain-points-content">
          <div className="pain-points-visual">
            <img 
              src={stressedManager}
              alt="Stressed Property Manager"
              className="pain-points-image"
            />
            <img 
              src={paperworkChaos}
              alt="Paperwork Chaos"
              className="pain-points-image"
            />
          </div>
          
          <div className="pain-points-grid">
            {painPoints.map((point, index) => (
              <div key={index} className="pain-point-card">
                <div className="pain-point-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints; 