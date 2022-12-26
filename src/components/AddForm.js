import { Component } from "react";

class AddForm extends Component {

    constructor(){
        super();
        this.state={
            userInput:""
        }
    }

    updateInput=(e)=>{
        this.setState({
            userInput:e.target.value
        })
    }

    addHandler=(e)=>{
        this.props.addItem(this.state.userInput);
        this.setState({
            userInput: "",
        });
    }

    render() {
        return (
            <div className="Form">
                <input type="text" onChange={this.updateInput} value={this.state.userInput} className="add-input"/>
                <button onClick={this.addHandler}>Add</button>
                <button className="hide">...</button>
                {/* <div className="user-input">{this.state.userInput}</div> */}
            </div>
        );
    }
}

export default AddForm