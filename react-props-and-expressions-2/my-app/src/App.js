import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <CustomButton text="I" className="button-one" />
          <CustomButton text="Know" className="button-two" />
          <CustomButton text="React!" className="button-three" />
        </div>
      </header>
    </div>
  );
}

export default App;
