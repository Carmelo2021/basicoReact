import logo from './platzi.webp';
import './App.css';

function Caja() {
  return (
    <div

      style={
        {
          backgroundColor: "purple",
          height: "200px",
          width: "1500px"
        }
      }>
      <p>hola</p>

    </div>

  );
}

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React
        </a>
      </header>
      <Caja />
    </div>

  );
}

export default App;
