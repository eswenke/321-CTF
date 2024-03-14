import { Pane, Heading, Button } from "evergreen-ui";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";
import Ctfpcap from "../ctf.pcapng";

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
        <Heading fontSize={32}>
          Level 2: Wireshark (Internet Control Message Protocol)
        </Heading>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <a href={Ctfpcap} download="pcap-file" target="_blank" rel="noreferrer">
          <Button>Download File</Button>
        </a>
      </Pane>
    </Pane>
  );
}

export default Level2;
