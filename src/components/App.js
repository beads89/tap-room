import '../App.css';
import React from 'react';
import DrinkControl from './DrinkControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <DrinkControl />
      </div>
    </React.Fragment>
  );
}


export default App;
