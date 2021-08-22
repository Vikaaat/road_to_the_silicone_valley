import './App.css';
import React from 'react';

import { Header, Footer, Button, Box, InputNumberStepper, Link, Download, Comments, ZoomIn, ZoomOut} from '@design-system-rt/rtk-ui-kit';

class Home extends React.Component {
    render() {
return(
<body>
    <div>
    <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Шаблон документа в формате А4</h5>
        <p class="card-text">Используйте этот шаблон в формате А4 для простоты и быстрого создания необходимого документа.</p>
        <a href="/template_web/" class="btn btn-primary">Перейти</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Шаблон для мобильного экрана</h5>
        <p class="card-text">Используйте этот шаблон в формате экрана мобильного приложения для простоты и быстрого создания необходимого документа.</p>
        <a href="/template_mob/" class="btn btn-primary">Перейти</a>
      </div>
    </div>
  </div>
</div>
    </div>
    </body>
);

}
}


export default Home;