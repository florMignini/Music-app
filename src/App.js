import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

import Navbar from "./components/navbar/Navbar";
import AnimatedRoutes from "./screen/animatedRoutes/AnimatedRoutes";
import { getAuth } from "./helper/getAuth";

function App() {
  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
