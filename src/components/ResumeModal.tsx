import { soundFx } from "../utils/audio";
import {
  MdClose,
  MdDownload,
  MdWork,
  MdSchool,
  MdStar,
  MdEmail,
  MdPhone,
} from "react-icons/md";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    soundFx.playClick();
    // Path to downloadable PDF
    const link = document.createElement("a");
    link.href = "/Oshaib_Beg_Resume.pdf";
    link.download = "Oshaib_Beg_Resume.pdf";
    link.click();
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-header">
          <div className="resume-title-box">
            <h2>Oshaib Beg</h2>
            <p className="resume-subtitle">Software Engineer / Developer</p>
          </div>

          <div className="resume-header-actions">
            <button
              className="resume-download-btn"
              onClick={handleDownload}
              onMouseEnter={() => soundFx.playHover()}
              data-cursor="pointer"
            >
              <MdDownload /> Download Resume
            </button>
            <button
              className="resume-close-btn"
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
            >
              <MdClose />
            </button>
          </div>
        </div>

        <div className="resume-body">
          <div className="resume-contact-bar">
            <span>
              <MdEmail /> oshaibbeg181203@gmail.com
            </span>
            <span>
              <MdPhone /> +91 9897655363
            </span>
          </div>

          <div className="resume-grid">
            <div className="resume-section">
              <h3>
                <MdWork /> Professional Summary
              </h3>
              <p>
                Passionate web developer with a strong grasp of HTML, CSS, and JavaScript.
                Invested in modern web frameworks and technologies, focused on improving user
                experience and taking on new challenges.
              </p>
            </div>

            <div className="resume-section">
              <h3>
                <MdStar /> Core Technical Expertise
              </h3>
              <div className="resume-tags">
                <span>Java</span>
                <span>C</span>
                <span>C++</span>
                <span>Python</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>React</span>
                <span>Git & GitHub (Basic)</span>
                <span>Smart Contracts</span>
              </div>
            </div>

            <div className="resume-section">
              <h3>
                <MdSchool /> Education & Certifications
              </h3>
              <ul className="resume-list">
                <li>
                  <strong>B.Tech, Artificial Intelligence</strong> - Sakhi Seva GL Bajaj Institute of Technology and Management (Nov 2022 - Sep 2026).
                </li>
                <li>
                  <strong>G.P.M College, Bareilly</strong> - Council for the Indian School Certificate Examination (2011 - 2021).
                </li>
                <li>
                  <strong>AWS Academy Graduate</strong> - AWS Academy Cloud Foundations.
                </li>
                <li>
                  <strong>AWS Academy Graduate</strong> - AWS Academy Cloud Architecting.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-footer">
          <span>Resume details from the supplied document</span>
          <button className="resume-secondary-dl" onClick={handleDownload}>
            Download PDF Version
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
