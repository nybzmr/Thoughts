
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
