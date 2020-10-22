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
  const [{}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      // Giving the access to the spotify api....
      spotify.setAccessToken(_token);

      // to get the user's account....
      spotify.getMe().then((user) => {
        console.log("person => ", user);
      });
    }

    console.log("Recieved token => ", token);
  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
