import * as React from 'react';
import './App.css';
import BadHeader from './components/BadHeader/BadHeader';
import GoodHeader from './components/GoodHeader/GoodHeader';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <BadHeader>Welcome to React</BadHeader>
          <GoodHeader>Welcome to React, too</GoodHeader>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
