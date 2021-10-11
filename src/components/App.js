import React, { Component } from "react";
import Header from "./Header";
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom"



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    )
  }
}

export default App;
