import '../App.css';
import React from 'react';
import { Header, Footer, Button, InputNumberStepper} from '@design-system-rt/rtk-ui-kit';
class Main extends React.Component{
    render(){
        let prop = this.props.draw_elements;
        if (prop.length > 0)
        {
            for (let i = 0; i < prop.length; i++)
            {
                if (prop[i].text === "Header")
                {
                    return(
                        <div id="main-root">
                        <Header className={prop[i].id}></Header>  
                        </div>
                    )
                }
                else if (prop[i].text === "Button")
                {
                    return(
                        <div id="main-root">
                        <Button className={prop[i].id}></Button>  
                        </div>
                    ) 
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