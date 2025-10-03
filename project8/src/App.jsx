import { useState } from "react";
import Navbar from "./components/Navbar";
import card from "./components/card";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const pages = {
    Home: "Welcome to the Home page!",
    Guidance: "Here is some guidance content.",
    Opinion: "Read opinions here.",
    News: "Latest news displayed here.",
    Article: "Interesting articles appear here.",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex justify-center mt-10">
        <card title={activePage} content={pages[activePage]} />
      </div>
    </div>
  );
}

export default App;
