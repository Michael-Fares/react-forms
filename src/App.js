import React, {Component} from 'react'
import axios from 'axios';


import './App.css';




class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
        firstName: "",
        lastName: ""
      }
    }
  
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value 
    })
  }


  handleSubmit = (e) => {
    console.log(e)

    e.preventDefault()


    // use axios to post to server from 311_wk4_day2
    // posts just a new user fname and lname to users table
    // got it to work in firefox turning off CORS
    // but not in Chrome
    axios.post('http://localhost:4001/users', {
      first_name: this.state.firstName,
      last_name: this.state.lastName
    })
    .then(function (response) {
      console.log('response', response);
    })
    .catch(function (error) {
      console.log('THERE WAS AN ERROR', error);
    });

    // reset the form
    this.setState( {
      firstName: "",
      lastName: ""
    } )
  }

  render () {
  return (
    <div className="App">
      <h1>Sample React Form</h1>
      <form>
        <input name="firstName" type="text" value={this.state.firstName} onChange={(e) => this.handleChange(e)}></input>
        <input name="lastName" type="text" value={this.state.lastName} onChange={(e) => this.handleChange(e)}></input>
        <input type="submit" onClick = {(e) => {this.handleSubmit(e)}}></input>
      </form>
    </div>
  );
  }
}

export default App;
