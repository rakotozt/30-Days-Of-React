
import './App.css';
import css3 from './images/css3.png'
import html5 from './images/html5.png'
import reactLog from './images/react.png'
import jsLog from './images/js.png'
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
  <body class="couleur">
<div class="couleur">
  <div class="container text-center title">Front end technologies</div>
  <div></div>
  <div class="container text-center">

  <div className='row'>
    <div className='col'><img className='logo' src={html5} alt="Italian Trulli"/></div>
    <div className='col'><img className='logo' src={css3} alt="Italian Trulli"/></div>
    <div className='col'><img className='logo' src={jsLog} alt="Italian Trulli"/></div>
    <div className='col'><img className='logo' src={reactLog} alt="Italian Trulli"/></div>
  
  </div>
  </div>
</div>
</body>
  );
}

export default App;
