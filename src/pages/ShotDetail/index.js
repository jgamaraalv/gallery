import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

import ShotsActions from "../../store/ducks/shots";

import { Container } from "./styles";

class ShotDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShot(id);
  }

  render() {
    const { shot } = this.props;
    return (
      <Container>
        <div className="shot-content">
          <h1>{shot.title}</h1>
          <div
            className="shot-description"
            dangerouslySetInnerHTML={{ __html: shot.description }}
          />
          <img src={shot.images && shot.images.two_x} alt={shot.title} />
          {shot.tags && shot.tags.length > 0 && (
            <div className="flex">
              <i className="fas fa-tags" />
              <ul className="tags">
                {shot.tags.map((tag, index) => (
                  <li key={`tag-${index}`}>{tag}</li>
                ))}
              </ul>
              <p className="shot-date">
                <i>Publicado em:</i>
                {moment(shot.published_at).format("DD/MM/YYYY")}
              </p>
            </div>
          )}
        </div>
      </Container>
    );
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
