import React from 'react';
import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Skills from './components/Skills';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';

function App()
{
  return(
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Services />
      <Contact />
    </>
  );
}

export default App;
