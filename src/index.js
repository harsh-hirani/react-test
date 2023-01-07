import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {is:true};

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState(prevState => ({
      is:!prevState.is
    }));
  }

  render(){
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.is?'ON':'OFF'}
        </button>
      </>
    )
  }
}

root.render(
  <>
    <Toggle />
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
