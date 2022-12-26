import { Component } from "react";

class ToDoItem extends Component{

    constructor(props){
        super(props);
        this.state={
            editable:false,
            item:this.props.item
        }
    }

    handleEdit=()=>{
        let editStatus=this.state.editable;
        if(editStatus){
            this.props.actions.edit(this.props.id,this.state.item)
        }
        this.setState({
            editable: !editStatus,
        });
    }

    handleDelete=()=>{
        console.log("in")
        this.props.actions.delete(this.props.id)
    }

    updateInput=(e)=>{
        this.setState({
            item: e.target.value
        })
    }
    
    render(){
        return (
            <div className="ToDoItem" id={this.props.id}>
                <input type="text" disabled={!this.state.editable} value={this.state.item} onChange={this.updateInput}/>
                <button onClick={this.handleEdit}>{this.state.editable?"Save":"Edit"}</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default ToDoItem