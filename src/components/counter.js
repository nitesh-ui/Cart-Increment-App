import React, { Component } from 'react';

class Counter extends Component {

    //Rendering Classes Dynamically
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    render() {
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.props.counter.value === 0 ? "Zero" : this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }
}

export default Counter