import React from "react";
import { NavLink } from "react-router-dom";

import { Container } from "./styles";

const Shot = () => (
  <Container>
    <NavLink to={`shots/:id`}>shot</NavLink>
  </Container>
);

export default Shot;
