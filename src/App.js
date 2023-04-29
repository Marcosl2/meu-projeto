import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
const nome = 'Marcos Lopes'
const newName = nome.toUpperCase()
const url = 'https://placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p> Olá, {newName}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>

    </div>
  );
}

export default App;
