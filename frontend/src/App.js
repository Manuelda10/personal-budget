import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';
import Hamburger from './components/Hamburger/Hamburger';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Overview></Overview>
      <div className='hamburger-container'>
            <Hamburger></Hamburger>
      </div>
    </div>
  );
}

export default App;
