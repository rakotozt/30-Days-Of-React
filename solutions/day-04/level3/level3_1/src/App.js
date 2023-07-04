import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Box = (props) =>{
return (
  <div className="Box " style={{backgroundColor:props.color, color:"white"}}><p>{props.color}</p></div>

);
}

const BoxLayer=() =>{
  return (
    <div class="w-100 h-100">
      <div className="row h-50"><Box color="#518cef"/></div>
      <div className="row h-50 "> <Box color="#3b10c4"/></div>
      <div className="row h-50 "> <Box color="#8ee763"/></div>
      <div className="row h-50 "> <Box color="#a30dd0"/></div>
    </div>
    
   
  )
}



function App() {
  return (

    <BoxLayer/>
  );
}

export default App;
