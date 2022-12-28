import { useState } from 'react';
import './App.css';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from "./scenes/Navbar";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div className='app bg-deep-blue'>
      <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      />
    </div>
  );
}

export default App;
