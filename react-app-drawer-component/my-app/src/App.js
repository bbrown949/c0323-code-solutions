import './App.css';
import AppDrawer from './AppDrawer';

const listItems = [
  { number: '001', name: 'Jedi' },
  { number: '002', name: 'Sith' },
  { number: '003', name: 'Wookee' },
  { number: '004', name: 'Ewok' },
  { number: '005', name: 'Mandalorian' },
];

function App() {
  return <AppDrawer listItems={listItems} />;
}

export default App;
