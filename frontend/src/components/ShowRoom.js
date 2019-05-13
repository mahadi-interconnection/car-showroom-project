import React, { Component } from 'react'
import "./styles/showroom.css";

class ShowRoom extends Component {
   
  state ={
    showrooms : [],
    cars: [],
    fetchedCars: []
  }

  fetchCars = () => {
    const shuffled = this.state.cars.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, (Math.random() * (8 - 2 + 2) << 0));
    
    this.setState(prev => ({
      fetchedCars: selected
    }))
  }

  async componentDidMount()
  {
    let showroomsPromise = fetch('http://localhost:8000/showrooms/')
    .then(response=>{
      return response.json()
    })
    .catch(error => {
      throw(error);
   })

    let carsPromise = fetch('http://localhost:8000/carlists/')
    .then(response=>{
      return response.json()
    })
    .catch(error => {
      throw(error);
  })

     const [showrooms, cars] = await Promise.all([showroomsPromise, carsPromise]);

    this.setState({
      showrooms,
      cars 
    })
  }

  render() {
    console.log(this.state.fetchedCars)

    return (
      <div className="container">
        <h2 className = "headers">Showrooms</h2>
      {/* showrooms card */}
        <div class="container mt-3 showroom_card">
          <div className="row mb ">
            {
                this.state.showrooms.map((showroom, key) =>
                  (
                  <div key={key} class="card text-white col-sm-3">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7BbNl6mHulVAyhCbpcMBZU5djGJGgPJX3f69TLTtIX-UoaKP3A" alt={showroom.name} />
                    <div class="card-body">
                      <h4 class="card-title">{showroom.name}</h4>
                      <button onClick={this.fetchCars} className="btn btn-primary btn-outline">show cars of this showroom</button>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>

        <hr />

        <div className="container mt-5 mb-5">
            <h2>Cars</h2>
          
          <div className="row mb">
            {
                this.state.fetchedCars.map((showroom, key) =>
                  (
                  <div key={key} class="card col-sm-3">
                    <img class="card-img-top" src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt={showroom.name} />
                    <div class="card-body">
                      <h5 class="card-title"> Manufactor : {showroom.manufactor} </h5>
                      <h5>Mileage:{showroom.mileage}</h5>
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