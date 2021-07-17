import React from "react";

class Search extends React.Component{

  render(){
  return (
    <div>
      <div className="input-group mb-3 mt-4 p-4">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="dropdown p-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Animal
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {this.props.animals.map((el) => {
              return (
                <li>
            <a className="dropdown-item" href="#">
              {el}
            </a>
          </li>
              );
            })}
        </ul>
      </div>

      <div className="dropdown mt-4 p-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Breed
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {this.props.breed.map((el) => {
              return (
                <li>
            <a className="dropdown-item" href="#">
              {el}
            </a>
          </li>
              );
            })}
        </ul>
      </div>

      <button type="button" className="btn btn-dark">
        Submit
      </button>
    </div>
  );
  }
}

export default Search;
