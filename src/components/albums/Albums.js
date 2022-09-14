import { useContext } from "react";
import {
  AlbumContainer,
  AlbumsWrapper,
  TitleContainer,
  Title,
  CardLink,
  CardImage,
  ArtistName,
  CardType,
  SubtitleContainer,
  CardYear,
  CircleIcon,
} from "./AlbumsStyle";
import SearchContext from "../../context/search/SearchContext";

const Albums = () => {
  const { albums } = useContext(SearchContext);

  return (
    <>
      {albums && albums ? (
        <AlbumContainer>
          <TitleContainer>
            <Title>Albums</Title>
          </TitleContainer>
          <AlbumsWrapper>
            {albums.map((album, index) => (
              <CardLink
                key={index}
                href={`${album.external_urls.spotify}`}
                target="_blank"
              >
                <CardImage src={`${album.images[1].url}`} alt="artist image" />
                <ArtistName>{album.name}</ArtistName>
                <SubtitleContainer>
                  <CardType>{album.type}</CardType>
                  <CircleIcon />
                  <CardYear>{album.release_date.slice(0, 4)}</CardYear>
                </SubtitleContainer>
              </CardLink>
            ))}
          </AlbumsWrapper>
        </AlbumContainer>
      ) : null}
    </>
  );
};

export default Albums;
