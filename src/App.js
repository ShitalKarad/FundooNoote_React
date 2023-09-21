import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
      <Route>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />

      </Route>
      </Routes>
    </Router>
  );
}

export default App;
