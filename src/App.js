import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Route path="/landing" component={Landing}/>
    </BrowserRouter>
  );
}

export default App;
