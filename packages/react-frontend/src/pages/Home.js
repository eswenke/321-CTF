import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from "../components/Header.js";

function Home() {

  return (
    <Pane>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ margin: "20px" }}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/level1">Level 1</Link>
            </li>
            <li>
              <Link to="/level2">Level 2</Link>
            </li>
            <li>
              <Link to="/level3">Level 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </Pane>
  );
}

export default Home;
