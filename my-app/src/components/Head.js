import '../App.css';
import React from 'react';
import {Header} from '@design-system-rt/rtk-ui-kit';

class Head extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div>
            <Header></Header>
            </div>
        );
    }
}

export default Head;