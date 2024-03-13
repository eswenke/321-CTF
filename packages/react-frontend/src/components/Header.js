import { Heading, Tablist } from "evergreen-ui";
import { Link } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <Tablist
      display="flex"
      justifyContent="space-between"
      backgroundColor="grey"
      padding={8}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Heading size={900} marginRight={16} marginY={3} color="white">
          CSC-321 Mastery: CTF Demo
        </Heading>
      </Link>
    </Tablist>
  );
}

export default Header;
