import './App.css';
import { Blog } from './components/Blog';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <Blog />
    </div>
  )
}

export default App
