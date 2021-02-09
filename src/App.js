import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
