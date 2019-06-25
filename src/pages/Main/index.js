import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ShotsActions from "../../store/ducks/shots";

import Loader from "../../components/Loader";
import ShotList from "../../components/ShotList";

class Main extends Component {
  componentDidMount() {
    this.props.getShots();
  }

  render() {
    const { shots, loading } = this.props;
    return loading ? <Loader /> : <ShotList shots={shots} />;
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
)(Main);
