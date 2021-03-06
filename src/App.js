import React, { Component } from 'react';
import Navigation from './shared/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
