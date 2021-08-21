import '../App.css';
import React from 'react';
import Main from './Main.js';
import Inspector from './Inspector.js';
import Tools from './Tools.js';
class Control extends React.Component{
    constructor(){
        super()
        this.state = {count: 0, element: "", elements: [{id: -1, text: ""}]}
    }
    updateData = (value) => {
        this.setState({element: value})
        let todos = [...this.state.elements];
        todos.push({id: this.state.count, text: value});
        this.setState({elements: todos});
        this.setState({count: this.state.count + 1})
    }
    render(){
        return(
            <>
            <Tools updateData = {this.updateData} />
            {this.state.elements[0].id}
            <Main draw_elements = {this.state.elements}/>
            <Inspector />
            </>
        )        
    }
}
export default Control;