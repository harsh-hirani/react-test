import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    arry = [0,454,5545,54,5,545,4];
    render() {
        return (
            <>
            {this.arry.map((e)=>{return(<li key={e.toString()}>{e+1}</li>)})}
            </>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Page/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
