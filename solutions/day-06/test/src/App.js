import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const BlockList = ({ num_list }) => {
  const blockList = num_list.map((block) => <Block num={block} color={getColor(block)} />)
  return <div className="row ml-3 mx-3">{blockList}</div>
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const getColor = num => {
  let col = 'black'
  if (num % 2 === 0) {
    col = "green"
  }
  else {
    col = "yellow"
  }

  if (isPrime(num) === true) {
    col = "red";
  }
  return col
}

const Block = (props) => {
  return (
    <div className="Box col-md-3" style={{ backgroundColor: props.color }}>{props.num}</div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>30 Days Of React</h1>
      <h5>Number Generator</h5>
    </div>

  )

}

function App() {
  const number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  return (
    <div className="App">
      <Header />
      <div className="container">
        <BlockList num_list={number} />
      </div>
    </div>
  );
}

export default App;
