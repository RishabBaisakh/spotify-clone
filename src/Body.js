import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250,h_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png"
          alt=""
        ></img>

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
