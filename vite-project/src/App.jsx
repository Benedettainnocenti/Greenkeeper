import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia";
import About from "./pages/About/About";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;