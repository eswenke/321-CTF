import { Pane, Heading, Text, Button } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";

function Alice() {
  const [resu, setResu] = useState("");
  const [isResult, setIsResult] = useState(false);

  function getResult(result) {
    const promise = fetch(`http://localhost:8000/${result}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return promise;
  }

  function handleResult(result) {
    getResult(result)
      .then((res) => {
        if (res.status === 204) {
          return res.json();
        } else {
          console.log("Error: " + res.status + " No object found.");
        }
      })
      .then((json) => {
        if (json) {
          setResu(json);
          setIsResult(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Pane>
      <Header />
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={30}
      >
        <Heading fontSize={32}>Hello! I'm Alice</Heading>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <Text style={{ fontSize: `25px` }}>g = 3</Text>
      </Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        <Button marginTop={20} onClick={handleResult}>
          Get Public Number
        </Button>
        {isResult && (
          <Pane>
            <Text padding={10}>{resu}</Text>
          </Pane>
        )}
      </Pane>
    </Pane>
  );
}

export default Alice;
