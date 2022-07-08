// import React from "react";

// export default class Counter extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             currentNumber: this.props.startNumber, 
//         }
//     }

//     increament () {
//         this.setState((prevState) => ({
//             currentNumber: prevState.currentNumber + 1 ,
//         }))
//     }
//     decrease () {
//         if (this.state.currentNumber > this.props.startNumber) {
//             this.setState((currentState) => ({
//                 currentNumber: currentState.currentNumber - 1 , 
//             }))
//         }
//     }

//     render () {
//         return (
//             <div>
//                 <span> {this.state.currentNumber} </span>
//                 <button onClick={() => this.increament()}> Increase </button>
//                 <button onClick={() => this.decrease()}> Decrease </button>

//             </div>
//         )
//     }
// }







// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Counter App</h1>
//         <div>
//           <Counter startNumber = {0} />
//           <Counter startNumber = {1}/>
//           <Counter startNumber = {4}/>
//           <Counter startNumber = {7}/>

//         </div>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload faster.
//         </p> */}
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>