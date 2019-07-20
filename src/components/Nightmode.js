import React from "react";
import StyledNightmode from "./styles/StyledNightmode";

const NightMode = ({ nightModeHandler, nightMode }) => (
  <StyledNightmode>
    <span>NightMode: </span>
    <label className="switch">
      <input type="checkbox" checked={nightMode} onChange={nightModeHandler} />
      <span className="slider round" />
    </label>
  </StyledNightmode>
);

export default NightMode;
