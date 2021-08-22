import '../App.css';
import React from 'react';
import Main from './Main.js';
import Inspector from './Inspector.js';
import Tools from './Tools.js';
class Control extends React.Component{
    constructor(){
        super()
        this.state = {element: "", elements: []}
    }
    updateData = (value) => {
        this.setState({element: value})
        this.setState({elements: [...this.state.elements, value]})
    }
    render(){
        return(
            <>
            <Tools updateData = {this.updateData} />
            <Main draw_elements = {this.state.elements}/>
            <Inspector />
            </>
        )        
    }
}
export default Control;