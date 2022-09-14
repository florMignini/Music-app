import { ResultContainer } from "./ResultStyle";
import Artist from "../../components/artist/Artist";
import Albums from "../../components/albums/Albums";
import Related from "../../components/relatedArtist/Related";

const Result = () => {
  return (
    <>
      <ResultContainer>
        <Artist />
        <Albums />
        <Related />
      </ResultContainer>
    </>
  );
};

export default Result;
