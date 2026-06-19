import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJs />, level: "80%" },
    { name: "React", icon: <FaReact />, level: "75%" },
  ];

  return (
  <section className="skills">
    <h2>My Skills</h2>

    {skills.map((skill, index) => (
      <div className="skill" key={index}>
        <div className="skill-header">
          <span>
            {skill.icon} {skill.name}
          </span>
          <span>{skill.level}</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: skill.level }}
          ></div>
        </div>
      </div>
    ))}
  </section>
);
}

export default Skills;