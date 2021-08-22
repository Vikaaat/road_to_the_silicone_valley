import '../App.css';
import React from 'react';
import { Header, Footer, Button, InputNumberStepper} from '@design-system-rt/rtk-ui-kit';
class Main extends React.Component{
    render(){
        var prop = this.props.draw_elements;
        if (prop.length > 0)
        {
            var head = prop.filter(item => item === "Header");
            var but = prop.filter(item => item === "Button");
            return(
                <div id="main-root">
                    {head.map(head => <Header />)}
                    {but.map(but => <Button />)}
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