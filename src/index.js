import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function WarningBanner({warn}) {
  if (!warn) {
    return null;
  }
  return (
    <div>warning</div>
  )
}
class Page extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {warning:true}
  }
  click = () => {
      this.setState(myState => ({
        warning: !myState.warning
      }));
  }
  render(){
    return (
      <div>
        <WarningBanner warn={this.state.warning} />
        <button onClick={this.click}>
          {this.state.warning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
root.render(
  <>
    <Page/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
