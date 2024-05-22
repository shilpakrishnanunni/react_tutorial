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


// import React from "react";
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

import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement} >Decrement</button>
        </div>
    )
}

export default Counter;








