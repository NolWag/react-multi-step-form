import React, { Component } from 'react';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        //console.log('values', this.props.values.firstName)
        return (
            <>
            <input 
                placeholder="Occupation"
                onChange={handleChange('occupation')}
                value={values.occupation}
            />
            <br />
            <input 
                placeholder="City"
                onChange={handleChange('city')}
                value={values.city}
            />
            <br />
            <input 
                placeholder="Bio"
                onChange={handleChange('bio')}
                value={values.bio}
            />
            <input type="submit" value="Back" onClick={this.back} />
            <input type="submit" value="Continue" onClick={this.continue} />
            </>
        )
    }
}

export default FormPersonalDetails;