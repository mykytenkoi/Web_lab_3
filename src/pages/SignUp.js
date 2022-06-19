import React from "react";
import axios from 'axios';

export default class SignUp extends React.Component {
    state = {
      name: '',
      email: '',
    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
      }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
      }
    handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          email: this.state.email
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render(){
    return(
        <div className="background">
            <div className="sign-section">
                <div className="main-logo"></div>
                <h1 className="sign-title">Create your account</h1>
                <form onSubmit={this.handleSubmit} className="form">
                <input className="input-sign" type="text" id="inputUsername" placeholder="Username" required onChange={this.handleChangeName}></input>
                <div className="radio-input">
                    <div>
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
                        <label className="laber-radio" for="inlineRadio1">Female</label>
                    </div>
                    <div>
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label className="laber-radio" for="inlineRadio2">Male</label>
                    </div>
                    <div>
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                        <label className="laber-radio" for="inlineRadio3">Other</label>
                    </div>
                </div>
                <label for="exampleInputEmail1">Date of birth? </label>
                <input className="input-sign" type="date" id="date" name="date" required></input>

                <input className="input-sign" type="email" id="inputEmail" placeholder="Email address" required autofocus onChange={this.handleChangeEmail}></input>
                <input className="input-sign" type="password" id="inputPassword" placeholder="Password" required></input>

                <input className="input-sign sign-button" type="submit" value="Sign Up"></input>
                </form>
            </div>
        </div>
    )}
};
