import { ResultContainer } from "./ResultStyle";
import Artist from "../../components/artist/Artist";
import Albums from "../../components/albums/Albums";
import Related from "../../components/relatedArtist/Related";
import { motion } from "framer-motion";

const Result = () => {
  return (
    <>
      <ResultContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Artist />
        <Albums />
        <Related />
      </ResultContainer>
    </>
  );
};

export default Result;
