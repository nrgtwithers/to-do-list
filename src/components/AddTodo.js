import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

onChange = (e) => this.setState({title: e.target.value});

    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todo..."
                />
                <input type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
