import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgImage from '../components/BackgroundImage/BackgroundImage';
import Hero from '../components/Hero/Hero';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";
const Projects = dynamic(() => import("../components/Projects/Projects"));
const Technologies = dynamic(() => import("../components/Technologies/Technologies"));
const Timeline = dynamic(() => import('../components/TimeLine/TimeLine'));
const Home = () => {
   const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
     const { observe:observe1, inView:inView1 } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
     const { observe:observe2, inView:inView2 } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });
  console.log({inView,inView1,inView2});
  return (
    <Layout>
     <Section grid> 
        <Hero />
       <BgImage /> 
     </Section> 
      <Projects />
  
      <div ref={observe}>
     {inView &&  <Technologies />}
      </div>
  
      <div ref={observe1}>
     {inView1 &&  <Timeline />}
      </div>


   <div  ref={observe2}>
   {inView2 
   && 
    <Acomplishments />}
      </div>
  
    </Layout>
  );
};

export default Home;
