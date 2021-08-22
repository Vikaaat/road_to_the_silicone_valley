import '../App.css';
import React from 'react';
import { Header, Footer, Button, InputNumberStepper} from '@design-system-rt/rtk-ui-kit';
class Main extends React.Component{
    onDragEnd(e)
    {
        let ofX = document.getElementById('main-root').offsetLeft
        let ofY = document.getElementById('main-root').offsetTop
        let ofW = document.getElementById('main-root').offsetWidth
        let ofH = document.getElementById('main-root').offsetHeight
        let testY = e.pageY - ofY
        let testX = e.pageX - ofX
        if(testY > ofH || testY < 0 || testX > ofW || testX < 0){
            e.target.style.top='0px'
            e.target.style.left='0px'
        }
        else{
            e.target.style.top=(testY) + 'px'
            e.target.style.left=(testX) + 'px'
        }
    }
    render(){
        var prop = this.props.draw_elements;
        var id = 0;
        if (prop.length > 0)
        {
            var head = prop.filter(item => item === "Header");
            var but = prop.filter(item => item === "Button");
            return(
                <div id="main-root">
                    {head.map(head => <Header className={++id} draggable onDragEnd = {this.onDragEnd} onClick = {() => {this.props.updateData(++id + " Header")}}/>)}
                    {but.map(but => <Button id={++id} draggable onDragEnd = {this.onDragEnd} onClick = {() => {this.props.updateData(++id + " Button")}}/>)}
                </div>
            );
        }
        else
        {
            return(
                <div id="main-root">

                </div>      
            )
        }
    }
}
export default Main;