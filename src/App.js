import React from "react";
import Search from "./Search";
import Table from "./Table";

class App extends React.Component{

  state = {
    animals: [],
    breeds: []
  }
  
  receiveAnimalData = (array1, array2) => {
    console.log(array1);
    console.log(array2);
    this.setState({ animals: array1, breeds:array2 });
  };

  render(){
  return (
    <React.Fragment>
      <Search animals={this.state.animals} breed={this.state.breeds}/>
      <Table sendData={this.receiveAnimalData}/>
    </React.Fragment>
  );
  }
}

export default App;
