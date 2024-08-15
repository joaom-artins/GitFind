import {Header} from '../../components/Header'
import background from '../../Assets/image.png'
import ItemList from '../../components/ItemList'

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
          <div className = "profile">
            <img src="https://avatars.githubusercontent.com/u/84035912?v=4" className="profileImage"
            alt = "Profile"/>
            <div>
              <h3>João Martins</h3>
              <span>@joaoM_artins</span>
              <p>descrição</p>
            </div>
          </div>
          <hr/>
          <div>
            <h4 className='repository'>Repositórios</h4>
            <ItemList title="teste1" description="Teste de descrição"/>
            <ItemList title="teste2" description="Teste de descrição"/>
            <ItemList title="teste2" description="Teste de descrição"/>
            <ItemList title="teste3" description="Teste de descrição"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
