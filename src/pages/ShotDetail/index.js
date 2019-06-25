import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ShotsActions from "../../store/ducks/shots";

import { Container } from "./styles";

class ShotDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShot(id);
  }

  render() {
    const { shot } = this.props;
    return <Container>{shot.title}</Container>;
  }
}

const mapStateToProps = state => ({
  shot: state.shots.shot
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
)(ShotDetail);
