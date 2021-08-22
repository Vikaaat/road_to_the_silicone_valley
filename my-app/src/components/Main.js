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
        if (prop.length > 0)
        {
            var head = prop.filter(item => item === "Header");
            var but = prop.filter(item => item === "Button");
            return(
                <div id="main-root">
                    {head.map(head => <Header draggable onDragEnd = {this.onDragEnd}/>)}
                    {but.map(but => <Button draggable onDragEnd = {this.onDragEnd}/>)}
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