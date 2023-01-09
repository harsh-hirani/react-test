import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
function Item (props) {
    const value = props.value;
    return(
        <li key={value.toString()}>
            {value}
        </li>
    )
}
function List(props) {
    const nums = props.nums;
    const items = nums.map((umber)=>{
        return <Item value={umber}/>
    })
    return(
        <ul>
            {items}
        </ul>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
let arry = [1,2,3,4,5];
root.render(
  <>
    <List nums={arry} />
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
