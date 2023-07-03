import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

function App() {
  return (
      <div className="container body-container text-center big-box rounded mt-3 mb-3">
        <div className='row'><h1>Subscribe</h1></div>
        <div className='row'><p>Sign up with your email address to receive news update</p></div>

        <div className='row'>
          <div className='col'><input className="rounded inp" type="text" placeholder="First name " /></div>
          <div className='col'><input className="rounded inp" type="text" placeholder="Last name" /></div>
          <div className='col cur'><input className="rounded inp" type="text" placeholder="Email"/></div>
        </div>
        <div className='row mt-3'>
          <div className="col text-center">
            <button className="rounded butt  mb-3 ">Subscribe</button>
            </div>
            </div>
      </div>
  );
}

export default App;
