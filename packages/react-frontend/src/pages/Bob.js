import { Pane, Heading, Text, Button } from "evergreen-ui";
import { useState } from "react";
import React from "react";
import Header from "../components/Header.js";

function Bob() {
    const [resu, setResu] = useState("");
    const [isResult, setIsResult] = useState(false);
  
    function getResult(result) {
      console.log(result);
      const promise = fetch(`http://localhost:8000/${result}/bob`, {
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
          if (res.status === 200) {
            setResu(res.body.number);
            setIsResult(true);
            return res.json();
          } else {
            console.log("Error: " + res.status + " No object found.");
          }
        })
        .then((json) => {
          setResu(json[0].number);
          setIsResult(true);
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
          <Heading fontSize={32}>Hello! I'm Bob</Heading>
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
          <Button marginTop={0} onClick={() => handleResult("public_number")}>
            Get Public Number
          </Button>
          {isResult && (
            <Pane>
              <Text style={{ fontSize: `25px` }} padding={10}>
                {resu}
              </Text>
            </Pane>
          )}
        </Pane>
      </Pane>
    );
}

export default Bob;
