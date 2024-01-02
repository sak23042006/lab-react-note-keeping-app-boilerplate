import React from "react";
import "./Editor.css";
import reset from "../assets/icons8-reset-100.png"

class edit extends React.Component{
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
        { 
            value: ''
        };
    }
    
    handleChange(e){
        this.setState({value: e.target.value});
    }

    resetvalue(){
        location.reload()
    }

    
    
    render(){
    return(
        <div className="container">
            <div className="input">
                <h3>Input</h3>
                <div className="text-box" >
                    <img onClick={this.resetvalue} src={reset} alt="" />
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value} />
                </div>
            </div>
            <div className="output">
                <h3>Pro Note</h3>
                <div className="output-text">{this.state.value}</div>
            </div>                
        </div>
        )
    }

}

export default edit