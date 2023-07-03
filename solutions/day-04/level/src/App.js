import logo from './logo.svg';
import './App.css';
import css3  from "./images/css3.png"; 
import html5 from "./images/html5.png"
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Card = (props) => {
  return (
    <img className='logo' src={props.name} alt="Italian Trulli"  />
  )
}
const CardList=()=>{
  return (
    <div className="container">
      <div className="row">
        <div className="col ml-5"><Card name={css3}/></div>
        <div className="col ml-5"><Card name={html5}/></div>
        <div className="col ml-5"><Card name={logo}/></div>
      </div>
    </div>
  )
}

function App() {
  return (
<CardList/>
  );
}

export default App;
