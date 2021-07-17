import React from "react";

class Table extends React.Component {
  state = {
    allAnimals: [],
    allAnimalCategry:[], 
    allBreedCategory:[]
  };
  componentDidMount(){
    fetch("/animals")
    .then(function(res){
      return res.json();
    })
    .then((json)=>{
      this.setState({allAnimals: json});
      console.log(this.state.allAnimals);

      this.state.allAnimals.map((ele)=>{
          if(!this.state.allAnimalCategry.includes(ele.animal)){
            console.log(ele.animal);
            this.state.allAnimalCategry.push(ele.animal);
          }
         
          if(!this.state.allBreedCategory.includes(ele.breed))
          this.state.allBreedCategory.push(ele.breed);
  
        })
  
        // this.state.allAnimals.map((ele)=>{
        //   if(!this.state.allBreedCategry.includes(ele.breed))
        //   this.state.allBreedCategry.push(ele.breed);
        // })

        this.props.sendData(this.state.allAnimalCategry, this.state.allBreedCategory);


    });
  }


  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Pet</th>
              <th scope="col">Animal</th>
              <th scope="col">City</th>
              <th scope="col">Breed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allAnimals.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.animal}</td>
                  <td>{el.city}</td>
                  <td>{el.breed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
