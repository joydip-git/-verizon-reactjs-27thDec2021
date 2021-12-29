import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import Parent from './components/Parent';

function App() {
  const logError = (errObject) => {
    console.log(errObject)
  }
  return (
    <div className="App">

      Welcome to the Heroes
      <br />
      <Hero heroName='Superman' />
      <Hero heroName='Batman' />
      <ErrorBoundary logger={logError}>
        <Hero heroName='Joker' />
      </ErrorBoundary>
      <br />
      <Parent />
    </div>
  );
}

export default App;
/**
 * {
 *   logger:FnRef,
 *   children:[ReactElementObject, 'Hi']
 * }
 */
