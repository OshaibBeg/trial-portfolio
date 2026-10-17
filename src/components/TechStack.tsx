import "./styles/TechStack.css";
import {
  FaCode,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAndroid,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPython,
} from "react-icons/si";

const technologies = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", Icon: FaCode },
      { name: "C", Icon: SiC },
      { name: "C++", Icon: SiCplusplus },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "HTML", Icon: FaHtml5 },
      { name: "CSS", Icon: FaCss3Alt },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "React", Icon: FaReact },
      { name: "Node.js", Icon: FaNodeJs },
    ],
  },
  {
    category: "Blockchain & Tools",
    items: [
      { name: "Smart Contracts", Icon: FaCode },
      { name: "Git & GitHub (Basic)", Icon: FaGithub },
    ],
  },
  {
    category: "Mobile Development",
    items: [{ name: "Android", Icon: SiAndroid }],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section">
      <h2>My Tech Stack</h2>
      <div className="tech-categories">
        {technologies.map((category) => (
          <div key={category.category} className="tech-category">
            <h3>{category.category}</h3>
            <div className="tech-grid">
              {category.items.map((technology) => (
                <div key={technology.name} className="tech-item">
                  <technology.Icon className="tech-icon" />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;