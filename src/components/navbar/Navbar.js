import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LeftNav,
  RightNav,
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchButtonIcon,
  AppTitle,
} from "./NavbarStyle";
import { useContext } from "react";
import SearchContext from "../../context/search/SearchContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchInput, activateSearch } = useContext(SearchContext);

  const [search, setSearch] = useState("");
  const searchData = async (e) => {
    e.preventDefault();
    searchInput(search);
    activateSearch();
    navigate("/result");
  };
  return (
    <>
      <Container>
        <LeftNav>
          <AppTitle>Music app</AppTitle>
        </LeftNav>
        <RightNav>
          <SearchContainer>
            <SearchInput
              placeholder="Search artist"
              type="input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchButton type="submit " onClick={searchData}>
              <SearchButtonIcon />
            </SearchButton>
          </SearchContainer>
        </RightNav>
      </Container>
    </>
  );
};

export default Navbar;
