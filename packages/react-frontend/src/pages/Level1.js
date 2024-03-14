import { Pane, Heading } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";
import DiffieHellman from "../components/DiffieHellman.js";
import Decryption from "../components/Decryption.js";

function Level1() {
  return (
    <Pane>
      <Header />
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <Heading fontSize={32}>
          Level 1: Alice, Bob, and ... Diffie-Hellman
        </Heading>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <DiffieHellman />
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <Decryption />
      </Pane>
    </Pane>
  );
}

export default Level1;
