import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Overview></Overview>
    </div>
  );
}

export default App;
