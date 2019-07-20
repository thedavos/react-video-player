import React from "react";
import ReactPlayer from "react-player";
import StyledVideo from "./styles/StyledVideo";
import StyledVideoWrapper from "./styles/StyledVideoWrapper";

const Video = ({ active, autoplay, onEndHandler, onProgressHandler }) => (
  <StyledVideo>
    <StyledVideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ position: "absolute", top: "0" }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={onEndHandler}
        onProgress={onProgressHandler}
      />
    </StyledVideoWrapper>
  </StyledVideo>
);

export default Video;
