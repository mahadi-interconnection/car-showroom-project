import React, { Component } from 'react'

class CreateShowroom extends Component {

   state = {
     name : '',
     logo : ''
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

    fetch('http://localhost:8000/showrooms/', {
      method: 'POST',
      body: data,
      headers: {
        "Content-Type": "application/json",
    }
    });

    this.setState({
      name : '',
      logo : ''
    })
    
  }

  render() {
    // console.log(this.state);     
    return (
      <div className = "container">
             <form className = "showroom_form" onSubmit = {this.submithandle}>

                <h2>Create Showroom</h2>
                    <div className="form-group">
                        <label htmlFor="name">Showroom Name:</label>
                        <input type="text" value={this.state.name} className="form-control" id="name" name = "name" onChange={event => this.handleChange(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logo">Showroom Logo:</label>
                        <input type="text" value = {this.state.logo} className="form-control" id="logo" name ="logo" onChange={event => this.handleChange(event)}/>
                    </div>

                    {/* <div className="form-group">
                       <button type="submit" className="btn btn-secondary">Submit Data!</button>
                    </div> */}
                    <button type="submit" className="btn btn-secondary" >Submit Data!</button>

       
            </form>

      </div>
    )
  }
}

export default CreateShowroom;