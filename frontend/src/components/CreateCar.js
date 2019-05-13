import React, { Component } from 'react';
import "./styles/create_car.css";

export default class CreateCar extends Component {

    state = {
        manufactor : "",
        tagline : "",
        model : "",
        mileage :"",
        year :"",
        price :"",
        hp : "",
        propellant : "",
        image : ""
    }




    handleChange(event) {
        this.setState( {
          [event.target.name] : event.target.value
        } );
    }


    submithandle = (e) =>{  
        e.preventDefault();
       //  console.log("clicked");
   
       let data = JSON.stringify(this.state);
   
       fetch('http://localhost:8000/carlists/', {
         method: 'POST',
         body: data,
         headers: {
           "Content-Type": "application/json",
       }
       });
   
    //    this.setState({
    //     manufactor : "",
    //     tagline : "",
    //     model : "",
    //     mileage :"",
    //     year :"",
    //     price :"",
    //     hp : "",
    //     propellant : "",
    //     image : ""
    //    })

    console.log(data);
       
     }


  render() {
    //   console.log(this.state);
    return (
        <div className = "container">
        <form className = "showroom_form" onSubmit = {this.submithandle} >
        <h2 className = "create_car_header">Create Car</h2>


               <div className="form-group">
                   <label htmlFor="formGroupExampleInput">Manufactor:</label>
                   <input type="text" className="form-control" id="manufactor" name = "manufactor" onChange={event => this.handleChange(event)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput2">Tagline:</label>
                   <input type="text" className="form-control" id="tagline" name = "tagline" onChange={event => this.handleChange(event)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput">Model:</label>
                   <input type="text" className="form-control" id="model" name = "model" onChange={event => this.handleChange(event)} />
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput2"> Mileage:</label>
                   <input type="text" className="form-control" id="mileage" name="mileage" onChange={event => this.handleChange(event)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput">Year:</label>
                   <input type="text" className="form-control" id="year" name = "year" onChange={event => this.handleChange(event)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput2">Price:</label>
                   <input type="text" className="form-control" id="price" name = "price" onChange={event => this.handleChange(event)}/>
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput">Horse Power:</label>
                   <input type="text" className="form-control" id="hp" name ="hp" onChange={event => this.handleChange(event)} />
               </div>
               <div className="form-group">
                   <label htmlFor="formGroupExampleInput2">Propellant:</label>
                   <input type="text" className="form-control" id="propellant" name ="propellant" onChange={event => this.handleChange(event)}/>
               </div>


               <div className="form-group">
               <label htmlFor="formGroupExampleInput2">Image:</label>
               <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="image" name = "image" aria-describedby="inputGroupFileAddon01" onChange={event => this.handleChange(event)}/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                    </div>
               </div>

               <button type="submit" className="btn btn-secondary" >Submit Data!</button>
       </form>

 </div>
    )
  }
}
