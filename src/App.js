import { useEffect, useContext } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

import Dashboard from "./screen/dashboard/Dashboard";
import Result from "./screen/resultScreen/Result";

import Navbar from "./components/navbar/Navbar";

import { getAuth } from "./helper/getAuth";
import SearchContext from "./context/search/SearchContext";

function App() {
  const { isSearching } = useContext(SearchContext);
  console.log(isSearching);
  useEffect(() => {
    getAuth();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/result"
          element={isSearching ? <Result /> : <Navigate to="/" />}
        />
        {/* not match route */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
