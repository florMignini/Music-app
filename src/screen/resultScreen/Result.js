import { ResultContainer } from "./ResultStyle";
import Artist from "../../components/artist/Artist";
import Albums from "../../components/albums/Albums";
import Related from "../../components/relatedArtist/Related";
import { motion } from "framer-motion";
import { useContext } from "react";
import SearchContext from "../../context/search/SearchContext";
import { Navigate } from "react-router-dom";

const Result = () => {
  const { isSearching } = useContext(SearchContext);
  if (isSearching) {
    return (
      <>
        <ResultContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Artist />
          <Albums />
          <Related />
        </ResultContainer>
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default Result;
