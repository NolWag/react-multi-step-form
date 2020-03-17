import React, { Component } from 'react';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        // detructuring values prop
        const { values: {firstName, lastName, email, occupation, city, bio } } = this.props;
        //console.log('values', this.props.values.firstName)
        return (
            <>
            <ul>
               <li>First Name: {firstName}</li>
               <li>Last Name: {lastName}</li> 
               <li>Email: {email}</li> 
               <li>occupation: {occupation}</li> 
               <li>City: {city}</li> 
               <li>Bio: {bio}</li> 
            </ul>
            <input type="submit" value="Back" onClick={this.back} />
            <input type="submit" value="Confirm" onClick={this.continue} />
            </>
        )
    }
}

export default Confirm;