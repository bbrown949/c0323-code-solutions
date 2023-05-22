import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton text="React" color="red" />
        <ToggleButton text="Toggle" color="green" />
        <ToggleButton text="Button" color="lightblue" />
      </header>
    </div>
  );
}

export default App;
