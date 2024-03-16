import { Pane, TextInput, Button, Text } from "evergreen-ui";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function DiffieHellman() {
  const [g, setG] = useState("");
  const [x, setX] = useState("");
  const [q, setQ] = useState("");
  const [result, setResult] = useState("");

  const formatEquation = () => {
    return (
      <Pane padding={10} style={{ fontSize: `25px` }}>
        g<sup>x</sup> mod q =
      </Pane>
    );
  };

  const calculateResult = () => {
    if (!g || !x || !q) {
      alert("Please enter all three numbers.");
      return;
    }
    const base = parseInt(g);
    const exponent = parseInt(x);
    const modulus = parseInt(q);
    const calculatedResult = Math.pow(base, exponent) % modulus;
    setResult(calculatedResult);
  };

  return (
    <Pane>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        just a calculator for convenience - values are hardcoded
      </Pane>
      <TextInput
        value={g}
        onChange={(e) => setG(e.target.value)}
        placeholder="Enter g"
        type="number"
      />
      <TextInput
        value={x}
        onChange={(e) => setX(e.target.value)}
        placeholder="Enter x"
        type="number"
      />
      <TextInput
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter q"
        type="number"
      />
      <Button
        onClick={calculateResult}
        marginTop={8}
        marginLeft={10}
        style={{ marginTop: "-3px" }}
      >
        =
      </Button>
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingY={10}
      >
        {formatEquation()}
        {result !== "" && <Text style={{ fontSize: `25px` }}>{result}</Text>}
      </Pane>
    </Pane>
  );
}

export default DiffieHellman;
