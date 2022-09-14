import { useContext } from "react";
import SearchContext from "../../context/search/SearchContext";
import {
  AlbumContainer,
  AlbumsWrapper,
  TitleContainer,
  Title,
  CardLink,
  CardImage,
  ArtistName,
  CardType,
} from "../albums/AlbumsStyle";

const Related = () => {
  const { relatedArtist } = useContext(SearchContext);
  const arrRelatedArtist = relatedArtist.slice(0, 5);

  return (
    <>
      {relatedArtist && arrRelatedArtist ? (
        <AlbumContainer>
          <TitleContainer>
            <Title>Fans also like</Title>
          </TitleContainer>
          <AlbumsWrapper>
            {arrRelatedArtist.map((album, index) => (
              <CardLink
                key={index}
                href={`${album.external_urls.spotify}`}
                target="_blank"
              >
                <CardImage src={`${album.images[1].url}`} alt="artist image" />
                <ArtistName>{album.name}</ArtistName>
                <CardType>{album.type}</CardType>
              </CardLink>
            ))}
          </AlbumsWrapper>
        </AlbumContainer>
      ) : null}
    </>
  );
};

export default Related;
