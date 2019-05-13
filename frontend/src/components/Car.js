import React, { Component } from 'react'
import "./styles/cars.css";

class ShowRoom extends Component {
   
  state ={
    cars : []
  }

  componentDidMount()
  {
    fetch('http://localhost:8000/carlists/')
    .then(response=>{
      return response.json()
    })
    .then(data =>{
      console.log(data)
      this.setState({
        cars : data
        
      })
    }) // get the response type
    .catch(error => {
      throw(error);
  }) 
  }

  render() {
    console.log(this.state.showrooms)
    return (
      <div className="container">
         <h2>Car Lists</h2>
      {/* showrooms card */}
        <div className="container">
          <div className="row mb">
            {
                this.state.cars.map((car, key) =>
                  (
                  <div key={key} class="card col-sm-3 ">
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt={car.name} />
                    <div class="card-body">
                      <h5 class="card-title">Model : {car.model}</h5>
                      <h5 class="card-title">Manufactor : {car.model}</h5>
                      <h5 class="card-title"> Mileage : {car.mileage}</h5>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>


    </div>
    )
  }
}

export default ShowRoom;