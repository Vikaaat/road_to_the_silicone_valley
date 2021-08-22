import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '@design-system-rt/rtk-ui-kit';

class Inspector extends React.Component{
    onClick(i, co)
    {
        document.getElementById(i-1).style.background = co;
    }
    render(){
        var prop = this.props.properties.split(' ');
        var id = prop[0];
        var element = prop[1];
        if (element === "Button")
        {
            return(
                <div className = "inspector">
                    <h1 class="title">Стили</h1>
                    <Button color = "primary1" size="small" onClick = {() => {document.getElementById(id-1).style.background = "rgba(119, 0, 255, 1)"}}/>
                    <Button color = "primary2" size="small" onClick = {() => {document.getElementById(id-1).style.background = "rgba(255, 79, 18, 1)"}}/>
                    <Button color = "secondary1" size="small" onClick = {() => {document.getElementById(id-1).style.background = "rgba(41, 204, 163, 1)"}}/>
                    <Button color = "secondary2" size="small" onClick = {() => {document.getElementById(id-1).style.background = "rgba(47, 154, 255, 1)"}}/>
                </div>
            )
        }
        else
        {
            return(
                <div className="inspector">
                    <h1 class="title">Стили</h1>
                </div>
        )
        }
    }
}
export default Inspector;