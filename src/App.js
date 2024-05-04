import React from "react";
import './App.css';
import CardComponent from './components/Card';
import GroupDesc from './components/GroupDesc';
import Header from './components/Header';
import Suggestions from './components/Suggestions'; // Assuming you have a component for suggestions

function App() {
  return (
    <div className="App">
      <Header />
      <GroupDesc />
      <div className="card-container">
        <div className="card-column">
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div className="suggestions-column">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}

export default App;
