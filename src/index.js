import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class My extends React.Component{
   constructor(props){
     super(props);
     this.state = {};
    // this.myHandel = this.myHandel.bind(this);
   }//;no need of state change
  myHandel (){console.log("this is:\n",this)};

  render(){
    return(
      <>
        <button onClick={this.myHandel.bind(this)}>
          click on
        </button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <My/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
