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
        <ToggleButton
          text="React"
          color="red"
          textTwo="Bryan"
          colorTwo="pink"
        />
        <ToggleButton
          text="Toggle"
          color="green"
          textTwo="Brown"
          colorTwo="purple"
        />
        <ToggleButton
          text="Button"
          color="lightblue"
          textTwo="hello"
          colorTwo="orange"
        />
      </header>
    </div>
  );
}

export default App;
