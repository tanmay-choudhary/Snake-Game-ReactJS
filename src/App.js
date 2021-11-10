import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from "./Routes";

class App extends Component {
  render () {
    const childProps = {  
    };

    return (
      <div> 
        <Routes childProps={childProps} />
      </div>
    )
  }
}

export default withRouter(App);
//tanmay