import './App.css';
import Click from './components/Click';
import Hero from './components/Hero';
import Hover from './components/Hover';

function App() {
  return (
    <div className="App">
      <Click />
      <br />
      <br />
      <Hover x={10} />
      <br />
      <br />
      <Hero heroName='Batman' />
      <br />
      <Hero heroName='Joker' />
    </div>
  );
}
export default App;
