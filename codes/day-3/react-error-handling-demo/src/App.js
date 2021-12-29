import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

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
