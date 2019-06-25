import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Shot } from "./styles";

const ShotList = ({ shots }) => (
  <Container>
    {shots.length > 0 &&
      shots.map(shot => (
        <Shot key={shot.id}>
          <NavLink to={`/shots/${shot.id}`}>
            <img src={shot.images.normal} alt={shot.title} />
          </NavLink>
          <p className="shot-title">{shot.title}</p>
        </Shot>
      ))}
  </Container>
);

export default ShotList;
