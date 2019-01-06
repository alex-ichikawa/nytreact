import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron"
// import SearchField from "./components/SearchField"
// import ResultField from "./components/ResultField"
// import SavedField from "./components/SavedField"
import FuckitWeAreDoingItLive from "./components/FuckitWeAreDoingItLive"

class App extends Component {

  render() {
    return (
      <div className="container">
        <Jumbotron />
        <FuckitWeAreDoingItLive />
      </div>
    );
  }
}

export default App;