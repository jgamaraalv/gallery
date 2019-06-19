import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ShotsActions from "../../store/ducks/shots";

import { ShotList } from "./styles";
import Shot from "../../components/Shot";

class Main extends Component {
  componentDidMount() {
    this.props.getShots();
  }

  render() {
    return (
      <ShotList>
        <Shot />
        <Shot />
        <Shot />
        <Shot />
        <Shot />
      </ShotList>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...ShotsActions
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Main);
