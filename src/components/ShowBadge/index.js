import React from "react";
import { FaCircle } from "react-icons/fa";

const iconStyle = {
  margin: "0px 5px 0 0",
  fontSize: 18,
  position: "relative",
  top: 2
};

export const showBadge = response => {
  switch (response) {
    case "I want to work.": {
      return "#247BA0";
    }
    case "Available to work.": {
      return "#2A9D8F";
    }
    case "Prefer not to work.": {
      return "#70C1B3"; // 2A9D8F
    }
    case "Not available to work.": {
      return "#F4A261";
    }
    case "No response.": {
      return "#FF8060";
    }
    default: {
      return "transparent";
    }
  }
};

export default ({ children, response, style }) => (
  <h2 style={{ ...style, margin: 0 }}>
    <FaCircle
      style={{
        ...iconStyle,
        color: showBadge(response)
      }}
    />
    {children}
  </h2>
);
