import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
 import ButtonAppBar from './NavBar';

function App() {

  return (
    <div>
      <Router>
        <Routes>
           <Route element={<ButtonAppBar />} path="/ButtonAppBar/*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
