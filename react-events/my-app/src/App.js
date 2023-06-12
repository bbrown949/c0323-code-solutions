import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text, color) {
    alert(`Clicked ${color} ${text}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CustomButton
            text="Fancy"
            color="red"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            text="Bryan"
            color="green"
            onCustomClick={handleCustomClick}
          />
          <CustomButton
            text="Brown!"
            color="lightBlue"
            onCustomClick={handleCustomClick}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
