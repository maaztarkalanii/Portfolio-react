import React from "react";
import Navbar from "./Navbar/Navbar";
import Mainpage from "./MainPage/Mainpage";
import Education from "./Education/Education";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./ContactPage/Contact";
import Footer from "./Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
