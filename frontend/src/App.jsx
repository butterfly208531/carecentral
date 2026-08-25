import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from "./demo.jsx";
import Home from "./home.jsx";
import Price from "./price.jsx";
import Question from "./question.jsx";
import Contact from "./contact.jsx";
import MoreModules from "./more-modules.jsx";

import ScrollToTop from "./ScrollToTop";
import RevealOnScroll from "./RevealOnScroll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RevealOnScroll />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Pricing page */}
        <Route path="/pricing" element={<Price />} />
        <Route path="/question" element={<Question />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/more-modules" element={<MoreModules />}/>

      </Routes>
    </Router>
  );
}

export default App;


