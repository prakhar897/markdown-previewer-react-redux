import React, { Component } from 'react';
import Editor from './Editor.js';
import Display from './Display.js';
import './App.css';
import {Helmet} from "react-helmet";

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Helmet>
		    <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
		</Helmet>
        <Editor />
        <Display />
      </div>
    );
  }
}

export default App;
