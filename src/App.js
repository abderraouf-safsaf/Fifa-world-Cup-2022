import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;
