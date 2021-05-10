import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import BigInversion from './components/BigInversion'

function App() {
  return (
    <div className="App border border-rounded">
      <BigInversion firstName="Doe ," lastName="Jane" age=" 54" hairColor="Black" />
      <BigInversion firstName="Smith ," lastName="John" age=" 54 " hairColor="Brown" />
      <BigInversion firstName="Fillmore ," lastName="Millard" age=" 54" hairColor="Brown" />
      <BigInversion firstName="Smith ," lastName="Jane" age=" 54" hairColor="Maria" />
      
    </div>
  );
}

export default App;
