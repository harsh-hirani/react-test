import React from "react";
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val:"lime"};
        this.handle = this.handle.bind(this);
        this.up = this.up.bind(this);
    }
    handle(event){
        alert(this.state.val);
        event.preventDefault();
    }
    up(event){
        this.setState({val:event.target.value});
    }
    render() {
        return (
            <>
                <form onSubmit={this.handle}>
                    <label>
                        <select value={this.state.val} onChange={this.up}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </>
        )
    }
}
root.render(<App/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
