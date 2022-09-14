import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";

export const Container = styled.div`
  width: 100vw;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
`;
export const LeftNav = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 870px) {
    width: 40%;
  }
`;
export const AppTitle = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  color: var(--secondaryFont-color);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 870px) {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
`;
export const RightNav = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 870px) {
    width: 60%;
    justify-content: center;
  }
`;
export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 20%;
  border-radius: 60px;
  padding: 0.5rem;
  @media screen and (max-width: 870px) {
    width: 80%;
  }
`;
export const SearchInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40%;
  transition: ease-in-out, width 0.35s ease-in-out;
  border: solid 0.1px var(--secondaryFont-color);
  border-radius: 60px;
  padding: 0.5rem;
  outline: none;
  background-color: transparent;
  &:focus {
    width: 90%;
    outline: none;
    color: var(--secondaryFont-color);
    font-size: 0.9rem;
  }
  &::placeholder {
    color: var(--secondaryFont-color);
    opacity: 1;
    font-weight: 100;
    font-size: 1rem;
  }
`;
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  width: 20%;
  height: 10%;
  cursor: pointer;
  font-weight: 400;
  border-radius: 0.25rem;
  background-color: transparent;
  color: var(--secondaryFont-color);
  text-decoration: none;
`;
export const SearchButtonIcon = styled(Search)`
  background-color: transparent;
  color: inherit;
  height: 40px;
`;
