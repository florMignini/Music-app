import styled from "styled-components";
import { Explicit } from "styled-icons/bootstrap";
import { PlayCircleFill } from "@styled-icons/bootstrap/PlayCircleFill";

export const ArtistContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;
export const LeftArtist = styled.a`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 1rem;
  text-decoration: none;
  /* position: absolute; */
  z-index: 1;
  cursor: pointer;
  background-color: #181818;
  &:hover {
    opacity: 0.8;
  }
`;
export const PlayArtistIcon = styled(PlayCircleFill)`
  /* display: none; */
  width: 5%;
  height: auto;
  left: 30%;
  top: 50%;
  color: var(--secondaryFont-color);
  cursor: pointer;
  position: absolute;
  z-index: 3;
`;
export const ArtistImgWrapper = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;
export const ArtistImage = styled.img`
  width: 95%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;
export const ArtistNameWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 10px;
`;
export const ArtistName = styled.h1`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--font-color);
  font-size: 3rem;
  font-weight: 400;
  margin-left: 3rem;
`;
export const ArtistType = styled.h3`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--font-color);
  font-size: 1rem;
  font-weight: 400;
  margin-left: 3rem;
`;
export const RightArtist = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 300;
  color: var(--font-color);
`;
export const TopTracksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
  justify-content: center;
`;
export const TopTracksLink = styled.a`
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--font-color);
  cursor: pointer;
  background-color: transparent;
  border-radius: 10px;
  padding: 5px;
  &:hover {
    background-color: var(--background-card);
  }
`;
export const TopTracksImage = styled.img`
  width: 12%;
  border-radius: 5px;
  object-fit: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem;
`;
export const TopTracksInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  width: 100%;
`;
export const TopTracksInfoContentSubtitle = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1px;
  width: 90%;
`;
export const TopTracksContentSubtitleRight = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const TopTracksArtistName = styled.h4`
  width: 90%;
  background-color: transparent;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 200;
`;
export const TopTracksArtistNameSong = styled.h4`
  width: 70%;
  background-color: transparent;
  margin-left: 1.2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  font-weight: 200;
`;
export const TopTracksArtistSongDuration = styled.h4`
  width: 90%;
  background-color: transparent;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 200;
`;
export const TopTracksExplicit = styled.h6`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  color: var(--background-card);
  background-color: transparent;
`;
export const ExplicitIcon = styled(Explicit)`
  width: 3%;
  color: var(--font-color);
`;
