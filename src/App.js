import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import useMediaQuery from './hooks/useMediaQuery';

import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";

import LineGradient from "./components/LineGradient";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [language, setLanguage] = useState('en');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <div className='app bg-deep-blue'>
      <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
    <div className= "w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} />}
      <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
    </div>
    <LineGradient />

    <div className='w-5/6 mx-auto md:h-full'>
    <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
      <MySkills language = {language}/>
      </motion.div>
    </div>
    </div>
  );
}

export default App;
