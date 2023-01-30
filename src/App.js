import logo from './logo.svg';
import './App.css';
import Saludo from './componentes/pure/saludo';
import SaludoFuncion from './componentes/SaludoFuncion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio saludo.jsx*/ }
        {/* <Saludo nombre="Jose"> </Saludo> */ }
        <SaludoFuncion nombre="Jose"></SaludoFuncion>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
