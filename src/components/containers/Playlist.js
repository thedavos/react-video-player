import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlatlistItems from "./Playlistitems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({ videos, active, nightModeHandler, nightMode }) => {
  return (
    <StyledPlaylist>
      <Nightmode nightModeHandler={nightModeHandler} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlatlistItems videos={videos} active={active} />
    </StyledPlaylist>
  );
};

export default Playlist;
