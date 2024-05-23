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

class Counter extends React.Component {
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

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visibility: false };
        this.toggleVisibility = this.toggleVisibility.bind(this)

      }
      // Change code below this line
    toggleVisibility() {
      this.setState((state) => ({
        visibility: !state.visibility
      }))
    }
      // Change code above this line
      render() {
        if (this.state.visibility) {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
              <h1>Now you see me!</h1>
            </div>
          );
        } else {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
          );
        }
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

export default ToggleButton;








