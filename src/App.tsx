import './App.css';
import Home from './components/Blog';


function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>About</li>
          <li>Skills</li>
          <li>Portforlio</li>
          <li>Contact</li>      
        </ul>
      </div>
      <Home/>
    </div>
  )
}

export default App
