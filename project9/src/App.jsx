import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Guidance from "./components/Guidance";
import Opinion from "./components/Opinion";
import News from "./components/News";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/opinion" element={<Opinion />} />
        <Route path="/news" element={<News />} />
        <Route path="/articles" element={<Article />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
