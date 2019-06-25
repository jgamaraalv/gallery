import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

import ShotsActions from "../../store/ducks/shots";

import { Container } from "./styles";
import Loader from "../../components/Loader";

class ShotDetail extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getShot(id);
  }

  render() {
    const { shot, loading } = this.props;
    return (
      <Container>
        <div className="shot-content">
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
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
                    <i className="fas fa-calendar-week" />
                    <i>Publicado em:</i>
                    {moment(shot.published_at).format("DD/MM/YYYY")}
                  </p>
                </div>
              )}
            </Fragment>
          )}
        </div>
        <NavLink to={`/`}>
          <i className="fas fa-arrow-circle-left" /> Voltar para a listagem
        </NavLink>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  shot: state.shots.shot,
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
)(ShotDetail);
