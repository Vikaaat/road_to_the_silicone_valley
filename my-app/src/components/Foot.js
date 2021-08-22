import '../App.css';
import React from 'react';
import {Footer} from '@design-system-rt/rtk-ui-kit';
class Foot extends React.Component{
    render(){
        return(
            <Footer children="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности" copyright="© 2021 ПАО «Ростелеком». 0+"></Footer>
        )
    }
}
export default Foot;