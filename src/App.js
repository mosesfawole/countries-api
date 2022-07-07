import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
