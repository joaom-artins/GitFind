import {Header} from '../../components/Header'
import background from '../../Assets/image.png'

import './styles.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = 'content'>
        <img src = {background} className= "background" alt = 'Background App'/>
        <div className ="info">
          <div>
            <input name="user" placeholder="@username"></input>
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
