import '../App.css';
import React from 'react';
import {Header, Button, Footer} from '@design-system-rt/rtk-ui-kit';
class Tools extends React.Component{
    render(){
        return(
            <div className="list-object">
                <h1 className="title">Компоненты</h1>
                <div className="object-item">
                    <Header></Header>
                </div>
                <div className="object-item">
                    <Button></Button>
                </div>
            </div>
        )
    }
}
export default Tools;