import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/waleedpf.png";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? { x: 0, opacity: 1, scale: 1 }
                : { x: "-10vw", opacity: 0, scale: 0.5 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>
                Nice to meet you! 👋🏻
              </motion.h4>
              <motion.h5 variants={paragraphVariants}>
                I'm a Full Stack Software Developer
                <span style={{ color: "var(--hl-color)" }}>.</span>
              </motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  I have a strong commitment to craft exceptional user
                  experiences. Armed with a Bachelor's degree in{" "}
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    Computer Science{" "}
                  </span>
                  , I've honed my proficiency in a wide array of technologies
                  including JavaScript, TypeScript, React, Node, Python, MongoDB
                  and more.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  On a mission to transform complex concepts into intuitive and
                  captivating digital experiences. My passion lies in shaping
                  the future of web development, and I eagerly seek new
                  opportunities & collaborations to make a profound impact in
                  the
                  <span style={{ color: "var(--hl-color)" }}>
                    {" "}
                    digital landscape.{" "}
                  </span>
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  When code isn't my focus, I'm conquering cycling routes,
                  feeling the wind on spirited runs, and fueling my love for
                  animal
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
