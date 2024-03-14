import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import Header from "../components/Header.js";

function Home() {
  const [characters, setCharacters] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchUsers()
      .then((res) => res.json())
      .then((json) => setCharacters(json["users_list"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function fetchUsers() {
    const promise = fetch("http://localhost:8000/users");
    return promise;
  }

  function postUser(person) {
    const promise = fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    return promise;
  }

  function deleteUser(id) {
    const promise = fetch(
      `http://localhost:8000/users/${id}`,
      {
        method: "DELETE",
      }
    );
    return promise;
  }

  function updateList(person) {
    postUser(person)
      .then(() => setCharacters([...characters, person]))
      .catch((error) => {
        console.log(error);
      });
  }

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
