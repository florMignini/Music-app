import styled from "styled-components";
import { CircleFill } from "@styled-icons/bootstrap/CircleFill";

export const AlbumContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
`;
export const AlbumsWrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-content: center;
  align-content: start;
`;
export const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 300;
  color: var(--font-color);
`;
export const CardLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(40, 40, 40, 0.5);
  gap: 10px;
  &:hover {
    background-color: var(--background-card);
  }
`;
export const CardImage = styled.img`
  width: 90%;
  height: 60%;
  object-fit: cover;
  border-radius: 5px;
`;
export const ArtistName = styled.h3`
  text-align: center;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 200;
  color: var(--font-color);
`;
export const SubtitleContainer = styled.div`
  width: 60%;
  margin-top: 0.5rem;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardType = styled.div`
  text-align: center;
  font-weight: 300;
  width: 75%;
  background-color: transparent;
  font-size: 0.9rem;
  color: var(--font-color);
`;
export const CardYear = styled.h6`
  text-align: center;
  font-weight: 300;
  width: 75%;
  background-color: transparent;
  font-size: 0.9rem;
  color: var(--font-color);
`;
export const CircleIcon = styled(CircleFill)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5%;
  color: var(--font-color);
`;
