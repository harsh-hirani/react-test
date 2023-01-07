import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date:new Date(),
    });
  }
  render() {
    return (
      <>
        <h1>Clock</h1>
        <h2>and time is: {this.state.date.toLocaleTimeString()}</h2>
      </>
    )
  }
}
// (props) {
// 
// );
//}
setInterval(tick,1000)
function tick(){
root.render(
  <div>
    <Clock  />
    <Clock  />
    <Clock  />
  </div>
);}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
