import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
      window.addEventListener('scroll', handleScroll);
    }
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  

  return (
    <div className='app bg-deep-blue'>
      <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
    <div className= "w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && <DotGroup selectedPage={selectedPage} />}
    </div>
    </div>
  );
}

export default App;
