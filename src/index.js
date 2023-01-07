import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Form(){
  function handleSubmit(e){
    e.preventDefault();
    alert("Please enter");
  }
  return(
    <form onSubmit={handleSubmit}>
      <button className="btn btn-primary">click me</button>
    </form>
  );
}

root.render(
  <>
   <Form></Form>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
