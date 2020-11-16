import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// Super object, which is going to interact between React app and spotify....

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: token,
      });

      // Giving the access to the spotify api....
      spotify.setAccessToken(_token);

      // to get the user's account....
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("Recieved token => ", token);
  }, []);

  console.log("user", user);
  return (
    <div className="app">
      {/* {token ? <Player spotify={spotify} /> : <Login />} */}
      <Player spotify={spotify} />
    </div>
  );
}

export default App;
