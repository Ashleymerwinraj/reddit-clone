import './App.css';
import SideNav from './components/SideNav';
import Main from './components/Main.js';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
