import { useContext } from "react";
import SearchContext from "../../context/search/SearchContext";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Result from "../resultScreen/Result";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  const { isSearching } = useContext(SearchContext);
  console.log(isSearching);
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
