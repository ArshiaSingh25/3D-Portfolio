import React from 'react'
import { Tilt } from 'react-tilt'
import{motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import{fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Introduction</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary max-w-3xl leading-[30px]'>
    Hello! I'm Arshia Singh, a second-year Information Technology student with a passion for AI/ML 
    and web development. I excel in Java, HTML, CSS,and JavaScript, and 
    I'm currently exploring React and Three.js to create dynamic web applications. I've participated in national hackathons
    and i've also been the winner of a business hackathon. When I'm not coding, you might find me 
    attending tech conferences, brainstorming new project ideas, or jamming to Taylor Swift.
    Feel free to check out my projects and get in touch with me on LinkedIn!
    </motion.p>
    </>
  )
}

export default SectionWrapper(About,"about")