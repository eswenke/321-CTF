import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp.js";

const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render:
root.render(<MyApp />);

/* 

Oh look, sourcecode! Very secure!
Read the flag carefully...

flag={you%3Dare-el%3Bdcode%21}

*/
