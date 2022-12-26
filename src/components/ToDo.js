import { Component } from "react";
import AddForm from "./AddForm";
import ToDoItem from "./ToDoItem";
import './ToDo.css'

class ToDo extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    addItem = (item) => {
        if (item === "") {
            alert("Item Cannot be blank");
            return;
        }
        this.setState((prev) => ({
            data: [item, ...prev.data],
        }));
    };

    editItem = (id,newItem) => {
        if(newItem===""){
            this.deleteItem(id)
            return
        }
        this.setState((prev) =>{
            let data=prev.data;
            data[id]=newItem
            return {
                data
            }
        });
    };

    deleteItem=(id)=>{
        this.setState(prev=>{
            let data=prev.data;
            data.splice(id,1)
            return {
                data
            }
        })
    }

    actions={
        edit:this.editItem,
        delete:this.deleteItem
    }

    render() {
        return (
            <div className="ToDo">
                <AddForm addItem={this.addItem} />
                <div>
                    {this.state.data.map((elt, i) => {
                        return <ToDoItem item={elt} id={i} key={`${i}-${elt}`} actions={this.actions}/>;
                    })}
                </div>
            </div>
        );
    }
}

export default ToDo