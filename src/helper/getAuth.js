import axios from "axios";

const CLIENT_ID = "e5026fd026d9433b8563b7b76e60e5ad";
const CLIENT_SECRET = "af13cee0a8204db4a0c2d1856734fb63";

export const getAuth = async () => {
  try {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      localStorage.setItem("token", tokenResponse.data.access_token);
    });
  } catch (error) {
    console.log(error);
  }
};
