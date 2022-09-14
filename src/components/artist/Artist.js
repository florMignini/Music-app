import { useContext } from "react";
import SearchContext from "../../context/search/SearchContext";
import {
  ArtistContainer,
  ArtistImgWrapper,
  LeftArtist,
  RightArtist,
  ArtistImage,
  TitleContainer,
  Title,
  TopTracksContainer,
  TopTracksLink,
  TopTracksImage,
  TopTracksInfoContentSubtitle,
  TopTracksArtistName,
  TopTracksArtistNameSong,
  TopTracksArtistSongDuration,
  TopTracksExplicit,
  ExplicitIcon,
  TopTracksContentSubtitleRight,
  PlayArtistIcon,
  ArtistNameWrapper,
  ArtistName,
  ArtistType,
} from "./ArtistStyle";
import { millisToMinutesAndSeconds } from "../../helper/convert";

const Artist = () => {
  const { topTracks, artist } = useContext(SearchContext);

  const arrTopTracks = topTracks.slice(0, 4);

  return (
    <ArtistContainer>
      {artist && artist.external_urls && artist.followers && artist.images ? (
        <LeftArtist href={artist.external_urls.spotify} target="_blank">
          <ArtistImgWrapper>
            <ArtistImage src={artist.images[1].url} alt={artist.name} />
          </ArtistImgWrapper>
          <ArtistNameWrapper>
            <ArtistName>{artist.name}</ArtistName>
            <ArtistType>{artist.type}</ArtistType>
          </ArtistNameWrapper>
          <PlayArtistIcon />
        </LeftArtist>
      ) : null}

      <RightArtist>
        <TitleContainer>
          <Title>Top Tracks</Title>
        </TitleContainer>
        {topTracks && arrTopTracks ? (
          <TopTracksContainer>
            {arrTopTracks.map((item, index) => (
              <TopTracksLink
                key={index}
                href={item.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                <TopTracksImage
                  src={`${item.album.images[2].url}`}
                  alt={index}
                />
                <TopTracksContainer>
                  <TopTracksInfoContentSubtitle>
                    <TopTracksArtistName>
                      {item.artists[0].name}
                    </TopTracksArtistName>
                    <TopTracksExplicit>
                      {item.explicit ? <ExplicitIcon /> : null}
                    </TopTracksExplicit>
                  </TopTracksInfoContentSubtitle>
                  <TopTracksContentSubtitleRight>
                    <TopTracksArtistNameSong>
                      {item.name}
                    </TopTracksArtistNameSong>
                    <TopTracksArtistSongDuration>
                      {millisToMinutesAndSeconds(item.duration_ms)}
                    </TopTracksArtistSongDuration>
                  </TopTracksContentSubtitleRight>
                </TopTracksContainer>
              </TopTracksLink>
            ))}
          </TopTracksContainer>
        ) : null}
      </RightArtist>
    </ArtistContainer>
  );
};

export default Artist;
