import React, { Component } from "react";
// Redux imports
import { bindActionCreators, bindActionCreatprs } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";

import Flat from "./flat";

class Flatlist extends Component {
  // static defaultProps = {
  //   flats: [
  //     {
  //       name: "Charm at the Steps of Montmartre",
  //       imageUrl:
  //         "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
  //       price: 164,
  //       priceCurrency: "EUR",
  //     },
  //   ],
  // };

  componentWillMount() {
    // TODO: dispatch an action to update the Redux state tree (flats)
    this.props.setFlats();
  }

  render() {
    return (
      <div className='flat-list col-sm-7'>
        {this.props.flats.map((flat) => (
          <Flat flat={flat} key={flat.name} />
        ))}
      </div>
    );
  }
}

// Bind action to the props of the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats: setFlats }, dispatch);
}

// Mapping the redux state from the external store to the actual props in the component
function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats,
  };
}

// export default Flatlist;
export default connect(mapReduxStateToProps, mapDispatchToProps)(Flatlist);
