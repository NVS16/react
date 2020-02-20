import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        todo: ''
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.todo)
            this.props.addTodo(this.state);
        this.setState({
            todo: ''
        });
    };
    handleChange = (e) => {
        this.setState({
            todo: e.target.value
        });        
    };
    render() {
        return (
            <div className="new-todo">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" onChange = {this.handleChange} className="materialize-textarea" value={this.state.todo}></textarea>
                            <label htmlFor="textarea1"></label>
                        </div>
                        <button className="btn">ADD</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;