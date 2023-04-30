import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {

  return (
    <div className="App">

      <HelloWorld />
      <SayMyName nome="marcos Lopes" />
      <SayMyName nome="Izabel" />
      <Pessoa
        
        nome="Marcos Lopes"
        idade='35'
        profissão='progamador'
        foto="https://via.placeholder.com/150" />


    </div>
  );
}

export default App;
