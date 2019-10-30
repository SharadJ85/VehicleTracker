import React, { Component } from 'react';
import './App.css';
import Vcls from './components/Vcls';
import GMaps from './components/GMaps';


class App extends Component {
  
  render() {
    return (
      <div className="body">
        <div className="Mapblock" >
          <h3 >Map</h3>
          <div className="Map">
            <GMaps/> 
          </div>
        </div>
        <div className='Tableblock'>
          <div>
            <div><h3>Table</h3>
            </div> 
            <div>
            </div>
          </div >
          <div className='Table'>
            <Vcls />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
