import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Mailbox(p){
const is = p.msgs;
return(
  <div>
    <h1> hello there! </h1>
      {is.length >0 &&
        <h2>you have new {is.length}msgs</h2>
      }
  </div>
)
}
const arr = ['hii','byeee','just']
root.render(
  <>
    <Mailbox msgs={arr}/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
