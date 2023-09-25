import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Dashboard/Dashboard';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />

      </Route>
      </Routes>
    </Router>
  );
}

export default App;
