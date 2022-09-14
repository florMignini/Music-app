import { useReducer } from "react";
import axios from "axios";
import SearchReducer from "./SearchReducer";
import SearchContext from "./SearchContext";

export default function SearchState(props) {
  const initialState = {
    isSearching: false,
    albums: [],
    topTracks: [],
    relatedArtist: [],
    artist: null,
  };
  const [state, dispatch] = useReducer(SearchReducer, initialState);
  //search parameters
  const token = localStorage.getItem("token");

  var searchParameters = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  //activate search variable
  const activateSearch = () => {
    dispatch({
      type: "SET_SEARCH",
      payload: true,
    });
  };
  //search functions
  const searchInput = async (search) => {
    try {
      var artistID = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=artist`,
        searchParameters
      );
      let idArtist = artistID.data.artists.items[0].id;
      //get albums
      var albums = await axios.get(
        `https://api.spotify.com/v1/artists/${idArtist}/albums?include_groups=album&limit=10`,
        searchParameters
      );
      dispatch({
        type: "GET_ALBUMS",
        payload: albums.data.items,
      });

      //get artist data
      var artist = await axios.get(
        `https://api.spotify.com/v1/artists/${idArtist}`,
        searchParameters
      );
      dispatch({
        type: "GET_ARTIST",
        payload: artist.data,
      });

      //get top tracks
      var artistTTracks = await axios.get(
        `https://api.spotify.com/v1/artists/${idArtist}/top-tracks?market=us&limit=5`,
        searchParameters
      );
      dispatch({
        type: "GET_TOP_TRACKS",
        payload: artistTTracks.data.tracks,
      });

      //get related artist
      var relatedArtist = await axios.get(
        `https://api.spotify.com/v1/artists/${idArtist}/related-artists?market=us&limit=5`,
        searchParameters
      );
      dispatch({
        type: "GET_RELATED_ARTIST",
        payload: relatedArtist.data.artists,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SearchContext.Provider
      value={{
        isSearching: state.isSearching,
        albums: state.albums,
        topTracks: state.topTracks,
        relatedArtist: state.relatedArtist,
        artist: state.artist,
        searchInput,
        activateSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
