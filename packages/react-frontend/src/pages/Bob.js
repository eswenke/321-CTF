import { Pane, Heading, Text } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";

function Bob() {
  return (
    <Pane>
      <Header />
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <Heading fontSize={32}>Hello! I'm Bob</Heading>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <Text style={{ fontSize: `25px` }}>q = 17</Text>
      </Pane>
    </Pane>
  );
}

export default Bob;
