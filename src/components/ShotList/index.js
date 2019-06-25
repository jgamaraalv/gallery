import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";

import ShotsActions from "../../store/ducks/shots";

import { Container, Shot } from "./styles";
import Loader from "../Loader";

class ShotList extends Component {
  componentDidMount() {
    this.props.getShots();
  }

  render() {
    const { shots, loading } = this.props;
    return (
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            {shots &&
              shots.length > 0 &&
              shots.map(shot => (
                <Shot key={shot.id}>
                  <NavLink to={`/shots/${shot.id}`}>
                    <img src={shot.images.normal} alt={shot.title} />
                  </NavLink>
                  <p className="shot-title">{shot.title}</p>
                </Shot>
              ))}
          </Container>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shots: state.shots.shots,
  loading: state.shots.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ShotsActions
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShotList);
