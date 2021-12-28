import Calculation from '../components/calculation/Calculation';
import Introduction from '../components/introduction/Introduction';
import Welcome from '../components/welcome/Welcome';
import './App.css';

function App() {
  const welcomeMessage = 'Welcome to React JS'
  const introMessage = 'React JS is a client side SPA library'
  const pHoverHandler = () => {
    window.alert('hovered')
  }

  // const welcomeElement = Welcome({ welcomeData: welcomeMessage, paraHandler:FnRef })
  // const introElement = Introduction({ introData: introMessage })


  //  const calcObj = new Calculation()
  return (
    <div className="App">
      <Welcome welcomeData={welcomeMessage} paraHandler={pHoverHandler} />
      <br />
      <Introduction introData={introMessage} />
      <br />
      <br />
      <Calculation />
    </div>
  );
}

export default App;
