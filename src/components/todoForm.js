import React, { Component} from 'react';


class TodoForm extends Component{

    

    render(){
        return (
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" onChange="" className="form-control" placeholder="title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="responsible" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="description" />
                    </div>
                </form>
            </div>
        )
    }
    
}