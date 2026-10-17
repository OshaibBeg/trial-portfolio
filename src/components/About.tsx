import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./styles/About.css";

const TypingText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay,
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "inline",
    },
  };

  return (
    <motion.p
      ref={ref}
      variants={sentenceVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
      <motion.span
        className="typing-cursor"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      >
        |
      </motion.span>
    </motion.p>
  );
};

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="text-content">
          <TypingText
            text="Android developer focused on building useful, reliable mobile experiences."
            delay={0.5}
          />
          <TypingText
            text="I'm Oshaib Beg — a software engineer and web developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks."
            delay={2.5}
          />
          <TypingText
            text="I'm pursuing a B.Tech in Artificial Intelligence at Sakhi Seva GL Bajaj Institute of Technology and Management."
            delay={5.5}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
