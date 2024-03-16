import { Pane, Heading, Button } from "evergreen-ui";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";
import Ctfpcap from "../ctf.pcapng";

function Level2() {
  const [isFlag, setFlagTrue] = useState(false);
  const [flagText, setFlagText] = useState("");

  function getFlag(flag) {
    const promise = fetch(`http://localhost:8000/auth_list/${flag}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return promise;
  }

  function handleFlag(flag) {
    getFlag(flag)
      .then((res) => {
        if (res.status === 200) {
          setFlagTrue(true);
          return res.json();
        } else {
          console.log("Error: " + res.status + " No object found.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    handleFlag(flagText); // Call handleFlag with the entered text
    setFlagText(""); // Reset the flagText state after submission
  };

  const handleChange = (event) => {
    setFlagText(event.target.value); // Update flagText state as the user types
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
        <form onSubmit={handleSubmit}>
          <label>
            Enter Flag:
            <input type="text" value={flagText} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Pane>
      {isFlag && (
        <Pane>
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
            <a
              href={Ctfpcap}
              download="pcap-file"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Download File</Button>
            </a>
          </Pane>
        </Pane>
      )}
    </Pane>
  );
}

export default Level2;
