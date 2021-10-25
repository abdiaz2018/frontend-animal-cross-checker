import React, { Component } from "react";
import Header from "./Header";
import '../App.css'
import IslandContainter from "./IslandContainter";
import IslandForm from "./IslandForm";
import Home from "./Home";
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom"



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/islands">
              <Header />
              <IslandContainter />
            </Route>
            <Route path="/islands/new">
              <Header />
              <IslandForm />
            </Route> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
