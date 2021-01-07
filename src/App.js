import logo from './logo.svg';
import './App.css';

function Helloworld(){
  return(
    <div id="hello">Hi! Im component named hello word</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Pascu!
        </p>
        <p>This is component: <Helloworld/></p>
      </header>
    </div>
  );
}

export default App;