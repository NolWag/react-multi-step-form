import React, { Component } from 'react';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        return (
            <>
            <h1>Thank you</h1>
            <p>Email with further instructions is on it's way!</p>
            </>
        )
    }
}

export default Confirm;