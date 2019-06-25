import React from "react";

import { Container } from "./styles";

const Loader = () => (
  <Container>
    <div className="lds-dual-ring" />
  </Container>
);

export default Loader;
