import React from 'react'
import '../App.css';
import {Link, Download, Comments, ZoomIn, ZoomOut} from '@design-system-rt/rtk-ui-kit';

class Nav extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
        <div className="instrument">
          <div className="title"><Link className="element"></Link>Поделиться</div><div className="title"><Download className="element"></Download>Скачать</div><div className="title"><Comments className="element"></Comments>Заметка</div><div className="title"><ZoomIn className="element"></ZoomIn>Приблизить</div><div className="title"><ZoomOut className="element"></ZoomOut>Отдалить</div>
        </div>
        );
    }
}
export default Nav;