import React, { useState }  from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import './App.css';
 
function App() {
  const [currentPage, setCurrentPage] = useState("about");
  let choosePage = () => {
    if (currentPage === "about") {
      return <About />
    } else if (currentPage === "contact") {
      return <Contact />
    } else if (currentPage === "portfolio") {
      return <Portfolio />
    } else if (currentPage === "resume") {
      return <Resume />
    }
  }
  return (
    <div>
      <Header setCurrentPage={setCurrentPage}/>
      <main>
        {choosePage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
