import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Home from "./Pages/Home";
import Adventure_Calendar from "./Pages/Adventure_Calendar";
import Book_Experience from "./Pages/Book_Experience";
import About_Us from "./Pages/About_Us";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Water from "./Pages/Water";
import Mountain from "./Pages/Mountain";


const MainRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Adventure Calendar" element={<Adventure_Calendar />} />
          <Route path="/Book Experience" element={<Book_Experience />} />
          <Route path="/Waterside camping" element={<Water />} />
          <Route path="/Mountaintop camping" element={<Mountain />} />
          <Route path="/About us" element={<About_Us />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
//   )
// }
export default MainRouter;