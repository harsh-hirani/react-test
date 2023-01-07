import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
function Welcome(props) {
  return <h1>welcome, {props.name}</h1>
}
function Avtar(p) {
  console.log(p);
  return (
    <>
      <img src={p.user.link}/>{/* p is prop and user is object of p becuase in p can be other as well */}
      <Welcome name={p.user.name} />
    </>

  );
}
function formateDate(date){
  return date.toLocaleDateString();
}

const Comment = (props) => {
  return (
    <>
      <div className="comment">
        <div className="UserInfo">
          <Avtar user={myobject}/>
          {/* passing a object */}
          <div className="UserInfo-frame">
            {props.user.name}
          </div>
        </div>
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formateDate(props.date)}
        </div>
      </div>
    </>
  );
}
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  user: {
    name: 'Hello Kitty',
    link: 'http://placekitten.com/g/64/64'
  }
};
const myobject= {
  name: 'Hello Kitty',
  link: 'http://placekitten.com/g/64/64'
};
root.render(
  <div>
    <Comment  text={comment.text} date={comment.date} user={comment.user}/>
  </div>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
