import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Encyclopedia from "./pages/Encyclopedia/Encyclopedia";
import About from "./pages/About/About";
import PlantsDetails from "./pages/plantsDetails/plantsDetails";
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
        <Route path="/plants/:slug" element={<PlantsDetails />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;