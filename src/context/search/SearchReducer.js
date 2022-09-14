import {
  GET_ALBUMS,
  GET_TOP_TRACKS,
  GET_RELATED_ARTIST,
  GET_ARTIST,
  SET_SEARCH,
} from "../actions-types";

export default function SearchReducer(state, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case GET_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.payload,
      };
    case GET_RELATED_ARTIST:
      return {
        ...state,
        relatedArtist: action.payload,
      };
    case GET_ARTIST:
      return {
        ...state,
        artist: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        isSearching: action.payload,
      };
    default:
      return state;
  }
}
