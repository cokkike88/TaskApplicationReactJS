import React, { Component } from 'react';



class TodoForm extends Component {
    
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInput (e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        // console.log(this.state);

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');
        console.log(this.state);
    }

    handleInputChange(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >Save</button>
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default TodoForm;