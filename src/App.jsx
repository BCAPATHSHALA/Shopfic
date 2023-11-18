import { useState } from "react";
import Navbar from "./components/layouts/overlayNavbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/header/Header";
import Home from "./components/pages/Home/Home";

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [darkLight, setDarkLight] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const darkLightFun = () => {
    setDarkLight(!darkLight);
  };

  return (
    <div className="App">
      <Header darkLight={darkLight} />
      <Navbar
        isOpen={isNavbarOpen}
        toggleNavbar={toggleNavbar}
        darkLightFun={darkLightFun}
        darkLight={darkLight}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home darkLight={darkLight}/>} />
          {/* <Route path="/todoapp" element={<Todoapp />} /> */}
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
