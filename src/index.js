import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Greet extends React.Component {
constructor(props) {
  super(props);
  this.state = {pass:0};
}
componentDidMount(){
  this.stateid = setInterval(() => this.tick(),1000);
}
componentWillUnmount(){
  clearInterval(this.stateid);
}
tick (){
  this.setState(
    {
      pass: !this.state.pass
    }
  );
  console.log(this.state.pass);
}
msg = '';
  render() {
    if(this.state.pass){
 this.msg = "hi welcome"
    }else{
 this.msg = "log in"
    }
  return (
    <>
      <h1>{this.msg}</h1>
    </>
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
