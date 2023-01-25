import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:'please write..'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleSubmit(event){
        alert("an eassy was :"+this.state.value);
        event.preventDefault();
    }
    render(){
        return (
            <>
            <form onSubmit={ this.handleSubmit}>
                <lable>
                    Eassy:
                    <textarea value={this.state.value} onChange={ this.handleChange} />
                </lable>
                <input type="submit" value="submit" />
            </form>
            </>
        );
    }
}
root.render(
    <>
        <NameForm/>
    </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
