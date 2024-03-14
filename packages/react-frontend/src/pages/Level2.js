import { Pane, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";

function Level2() {
  return (
    <Pane>
      <Header />
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <Heading fontSize={32}>Level 2: Wireshark</Heading>
      </Pane>
    </Pane>
  );
}

export default Level2;
