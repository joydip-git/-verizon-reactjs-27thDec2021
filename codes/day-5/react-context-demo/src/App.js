import './App.css';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import OrderSubmitButton from './components/OrderSubmitButton';
import SubmitProductButton from './components/SubmitProductButton';

function App() {
  return (
    <div className="App">
      {/* <DashBoard value='Submit' backColor='yellow' /> */}
      <DashBoard />
      <br />
      <br />
      <OrderSubmitButton />
      <br />
      <br />
      <Login />
      {/* <Login>
        <SubmitProductButton />
      </Login> */}
      <SubmitProductButton />
    </div>
  );
}

export default App;
