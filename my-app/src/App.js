import './App.css';
import { Header, Footer, Button, InputNumberStepper, Link, Upload} from '@design-system-rt/rtk-ui-kit';
import React from 'react';
const h=<Header/>
class App extends React.Component {
  state = {
    countHeader: 0,
    countButton: 0,
    startX: 0,
    startY: 0,
    color: "primary1",
    children: "test",
  }
  onClickHeader = () => {
    document.querySelector('.inspector').style.opacity=0
    this.setState(({ countHeader }) => ({
      countHeader: countHeader + 1,
    }));
  }
  onClickButton = () => {
    document.querySelector('.inspector').style.opacity=1
    this.setState(({ countButton }) => ({
      countButton: countButton + 1,
    }));
  }
  onDraggble = (e) => {
    this.setState(({ startX }) => ({
      startX: e.pageX,
    }));
    this.setState(({ startY }) => ({
      startY: e.pageY,
    }));
  }
  moveDraggble = (e) => {
    let ofX = document.getElementById('main-root').offsetLeft
    let ofY = document.getElementById('main-root').offsetTop
    e.target.style.top=(e.pageY - ofY) + 'px'
    e.target.style.left=(e.pageX - ofX) + 'px'
    
  }
  EndDraggble = (e) => {
    
    let ofX = document.getElementById('main-root').offsetLeft
    let ofY = document.getElementById('main-root').offsetTop
    let ofW = document.getElementById('main-root').offsetWidth
    let ofH = document.getElementById('main-root').offsetHeight
    let testY = e.pageY - ofY
    let testX = e.pageX - ofX
    if(testY > ofH || testY < 0 || testX > ofW || testX <0){
      e.target.style.top='0px'
      e.target.style.left='0px'
    }
    else{
      e.target.style.top=(testY) + 'px'
      e.target.style.left=(testX) + 'px'
    }
    
  }
  gretProp = (e) => {
      
    this.setState(({ color }) => ({
      color: e.target.value,
    }));
  }
  render() {
    let currentColor = this.state.color
    return (
      <div className="App">
        <Header></Header>
        <div class="instrument"></div>

        <main>
          <div class="list-object">
            <h1 class="title">Компоненты</h1>
            <div class="object-item" onClick={this.onClickHeader}>
              <Header></Header>
            </div>

            <div class="object-item" onClick={this.onClickButton}>
              <Button color={currentColor}>{this.state.children}</Button>
            </div>
           
          </div>
          <div id="main-root">
          {[...Array(this.state.countHeader)].map(() => <Header draggable onDragStart={this.onDraggble} onDrag={this.moveDraggble} onDragEnd={this.EndDraggble}/>)}
          {[...Array(this.state.countButton)].map(() => <Button color={currentColor} draggable onDragStart={this.onDraggble} onDrag={this.moveDraggble} onDragEnd={this.EndDraggble}>{this.state.children}</Button>)}
          </div>
          <div class="inspector">
            <h1 class="title">Стили</h1>
            <select onChange={this.gretProp} >
              <option value="primary1">Фиолетовый</option>
              <option value="primary2">Оранжевый</option>
              <option value="secondary1">Зеленый</option>
              <option value="secondary2">Голубой</option>
            </select>
          </div>
        </main>
        <Footer children="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"></Footer>
  
      </div>
    );

  }
}

export default App;