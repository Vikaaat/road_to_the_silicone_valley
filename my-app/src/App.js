import './App.css';
import { Header} from '@design-system-rt/rtk-ui-kit';
import { Footer} from '@design-system-rt/rtk-ui-kit';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer children="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"></Footer>

    </div>
  );
}
export default App;