import "./styles/Work.css";

const Work = () => {
  const projects = [
    {
      title: "Sahayak",
      category: "Java Application",
      tools: "Java",
      description:
        "A Java app focused on peace, justice, and strong institutions, with an emphasis on creating a safer environment for women.",
    },
    {
      title: "Charitable Donations Transparency",
      category: "Blockchain Project",
      tools: "Solana",
      description:
        "A donation transparency project using the Solana blockchain to improve accountability in charitable giving.",
    },
    {
      title: "MindBody Wellness",
      category: "Wellness Platform",
      tools: "Confidential video consultations",
      description:
        "A mental wellness project offering private video consultations and personalized support for stress, anxiety, and emotional well-being.",
    },
  ];

  return (
    <div className="work" id="work">
      <div className="title">
        <span>MY WORK</span>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-item" key={index}>
            <div className="work-content">
              <div className="work-info">
                <h2>{project.title}</h2>
                <p>{project.category}</p>
                <p className="tools">{project.tools}</p>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                    View Project
                  </a>
                )}
              </div>
              {project.image && (
                <div className="work-media" style={{ aspectRatio: project.aspectRatio }}>
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
