import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import Inspector from './Inspector.js';
import Tools from './Tools.js';
class Control extends React.Component{
    constructor(){
        super()
        this.state = {element: "", elements: [], prop: ""}
    }
    updateData = (value) => {
        this.setState({element: value})
        this.setState({elements: [...this.state.elements, value]})
    }
    propData = (value) => {
        this.setState({prop: value})
    }
    render(){
        return(
            <>
            <Tools updateData = {this.updateData} />
            <Main draw_elements = {this.state.elements} updateData = {this.propData}/>
            <Inspector properties = {this.state.prop}/>
            </>
        )        
    }
}
export default Control;