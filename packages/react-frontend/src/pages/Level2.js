import { Pane, Heading, Button } from "evergreen-ui";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";

function Level2() {
  const handleDownload = () => {
    const fileContent = "This is the content of the downloadable file.";
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "downloadable_file.txt"; //
    anchor.click();
    window.URL.revokeObjectURL(url);
  };

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
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <Button onClick={handleDownload}>Download File</Button>
      </Pane>
    </Pane>
  );
}

export default Level2;
