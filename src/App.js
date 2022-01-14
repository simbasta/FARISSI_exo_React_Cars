import React, { Component } from 'react';
import Mycars from './components/Mycars';

import './App.css';

class App extends Component {

  state = {
    titre: "catalogue de nos voitures"
  }


  clique = (e) => {
    
     this.setState({
       titre: "changer en dur"
     })

}



  render(){
    return (
      <div className="App">
        <Mycars title={this.state.titre} />
  
      </div>
    );
  }
  
}

export default App;
