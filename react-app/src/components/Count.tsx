import React from "react";
// stateless functional component
// const Greeting = (props) => {
    //     return <h1>Hello, {props.name}!</h1>;
    //   };
    
// stateless component
// class Greeting extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}!</h1>;
//     }
//   }



// // stateful component - old
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }

//     increment = () => {
//         this.setState({ count: this.state.count + 1 })
//     }

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment} >Increment</button>
//             </div>
//         );
//     }
// }

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Initial State" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            name: "Button Clicked"
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Button</button>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export class ToggleButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
    increment() {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }
    decrement() {
        this.setState((state) => {
            return {count: state.count - 1}
        })
    }
    reset() {
        this.setState((state) => {
            return { count: state.count = 0 }
        })
    }
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
};

export class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState(state => {
      return { input: event.target.value }
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

export class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    this.setState(state => ({
      submit: state.input
    }))
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <h1>MY FORM</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

// stateful function
// import React, { useState } from "react";

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const decrement = () => {
//         setCount(count - 1);
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment} >Increment</button>
//             <button onClick={decrement} >Decrement</button>
//         </div>
//     )
// }

// export default Counter;








