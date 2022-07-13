import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:name" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
