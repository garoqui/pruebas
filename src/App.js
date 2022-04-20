import logo from './logo.svg';
import './App.css';
import MiContextProvider from './components/miContext';
import MiObserver from './components/miObserver';
import MiObserver2 from './components/miObserver2';

function App() {
  return (
    <div className="App">
      <MiContextProvider> 
      <MiObserver></MiObserver>
      <MiObserver2></MiObserver2>
      </MiContextProvider>
      
    </div>
  );
}

export default App;
