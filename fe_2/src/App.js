import './App.css';
import './Style/Style.css';
import Login from './Components/Login';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CreateUser from './Components/CreateUser';
import TicketForm from './Components/TicketForm';
import PrivateRoute from './PrivateRoute';
import LogOut from './Components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/createUser" element={<CreateUser />}/>
          <Route path="/createTicket" element={<TicketForm />} />
        <Route path="/LogOut" element={<LogOut/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
