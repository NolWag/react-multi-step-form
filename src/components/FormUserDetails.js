import React, { Component } from 'react';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        //console.log('values', this.props.values.firstName)
        return (
            <>
            <input 
                placeholder="First Name"
                onChange={handleChange('firstName')}
                value={values.firstName}
            />
            <br />
            <input 
                placeholder="Last Name"
                onChange={handleChange('lastName')}
                value={values.lastName}
            />
            <br />
            <input 
                placeholder="Email"
                onChange={handleChange('email')}
                value={values.email}
            />
            <input type="submit" value="Continue" onClick={this.continue} />
            </>
        )
    }
}

export default FormUserDetails;