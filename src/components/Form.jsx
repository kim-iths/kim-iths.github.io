import React, { Component } from 'react'

export class form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: ''

        }
    }

        handleEmailChange = (event) => {
            this.setState({
                email: event.target.value
            })

        }

        handleSubmit = Event => {
            alert(`${this.email} `)
            

        }

        

    render() {
        const {email} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Email</label>
                <input 
                type='text' 
                value={this.email} 
                onChange={this.handleEmailChange} required/>
            </div>
            <button type="submit">Submit</button>
            </form>
        )
    }
}

export default form;
