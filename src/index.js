import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Greet extends React.Component {
constructor(props) {
  super(props);
  // this.ss = this.ss.bind(this);
  // this.dd = this.dd.bind(this);
  this.state = {pass:0};
}
ss = ()=>{this.setState({pass:0});}
dd = ()=>{this.setState({pass:1});}
  render() {
    let btn;
    if(this.state.pass){
 btn = <button type="button" onClick={this.ss}>hi there</button>;
 
}else{
  this.msg = "log in"
  btn = <button type="button" onClick={this.dd}>tata</button>;
    }
  return (
    btn
  );
}
}

root.render(
  <>
    <Greet hey={0}/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
