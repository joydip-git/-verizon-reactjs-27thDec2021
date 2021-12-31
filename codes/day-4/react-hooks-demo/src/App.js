import './App.css';
import Click from './components/Click';
import Parent from './components/Parent';
//import Sample from './components/Sample';

function App() {
  return (
    <div className="App">
      {/* <Sample />
      <br /> */}
      <div>
        Effect Hook Example
        <br />
        <Parent />
        <br />
        <br />
        <Click />
      </div>
    </div>
  );
}

export default App;
