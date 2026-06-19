import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Building modern and responsive websites.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      desc: "Mobile-friendly and user-friendly layouts.",
    },
    {
      icon: <FaPalette />,
      title: "UI Design",
      desc: "Clean and attractive user interfaces.",
    },
  ];

  return (
    <section className="services">
      <h2>My Services</h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;