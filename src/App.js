import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const LazyProjects = React.lazy(()=>import("./pages/Projects"))


export const AppContext = React.createContext();

function App() {
  function scrollToTopHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Router>
      <Navigation scrollToTopHandler={scrollToTopHandler}/>
      <div className='content'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<React.Suspense fallback={<Loading/>}><LazyProjects/></React.Suspense>} />
        <Route path="/contact" element={<ContactPage/>} />

      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
