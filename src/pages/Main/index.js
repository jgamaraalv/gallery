import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ShotsActions from "../../store/ducks/shots";

class Main extends Component {
  componentDidMount() {
    this.props.getShots();
  }

  render() {
    return <Fragment>oi</Fragment>;
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
