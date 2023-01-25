import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"));
class Mmyy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eas:"write here...",
            name:"john doe"
        };
        this.myclick = this.myclick.bind(this);
        this.myhandle1 = this.myhandle1.bind(this);
        this.myhandle2 = this.myhandle2.bind(this);
    }
    myclick(event){
        alert("hello"+this.state.name+"! you wrote : "+this.state.eas);
        event.preventDefault();
    }
    myhandle1(event){
        this.setState({name:event.target.value});
    }
    myhandle2(event){
        this.setState({eas:event.target.value});
    }
    render() {
        return (
            <>
            <form onSubmit={this.myclick}>
                <label>Name
                    <input type="text" value={this.state.name} name="name" onChange={this.myhandle1}/>
                </label>
                <label>write
                    <textarea  name="wrt" value={this.state.eas} onChange={this.myhandle2}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
            </>
        )
    }
}
root.render(<Mmyy/>)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
