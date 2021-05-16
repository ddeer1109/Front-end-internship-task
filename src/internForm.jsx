import React from 'react';
const LOADING_MESSAGE = "Loading data ...";
const STATE_DELAY = 1000;

export class InternForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: LOADING_MESSAGE,
            email: LOADING_MESSAGE,
            internshipStart: LOADING_MESSAGE,
            internshipEnd: LOADING_MESSAGE
        }
    }
    componentDidMount() {
        setTimeout(() => {
        
            this.setState ({
                name: this.props.internData.name,
                email: this.props.internData.email,
                internshipStart: this.props.internData.internshipStart,
                internshipEnd: this.props.internData.internshipEnd,
        })
        }, STATE_DELAY)
        
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.handleData(this.state);
    
    }
    render() {
        return (
            <div>
                <form class="intern-edit" onSubmit={this.handleSubmit} >
                    <div class="fields-container">
                        <h2 class="form-title">Edit</h2>
                    
                        <div class="input-field">                    
                            <label>Name *</label>
                            <input  value={this.state.name} name="name" onChange={this.handleChange}/>
                            <i class="fas fa-exclamation warning hidden large-input"></i>
                        </div>

                        <div class="input-field">                    
                            <label>Email *</label>
                            <input value={this.state.email} name="email" onChange={this.handleChange}/>
                            <i class="fas fa-exclamation warning hidden large-input"></i>
                        </div>
                        
                        <div class="input-field period-section">
                            <div class="date">
                                <label>Internship start *</label><i class="fas fa-exclamation warning hidden small-input"></i>
                                <input type="date" value={this.state.internshipStart} name="internshipStart" onChange={this.handleChange}/>
                            </div>
                            <div class="date">
                                <label>Internship end *</label><i class="fas fa-exclamation warning hidden small-input"></i>
                                <input type="date" value={this.state.internshipEnd} name="internshipEnd" onChange={this.handleChange}/>
                            </div>
                        </div>
                            <div class="button-section">
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                    </div>
                </form>
            </div>
        )
    }
}