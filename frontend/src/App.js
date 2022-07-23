import './App.css';
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './pages/Overview/Overview';
import Hamburger from './components/Hamburger/Hamburger';
import TransactionsPage from './pages/Transactions/TransactionsPage';

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/home' element={<Overview></Overview>} ></Route>
        <Route path='/transactions' element={<TransactionsPage></TransactionsPage>} ></Route>
      </Routes>
      <div className='hamburger-container'>
            <Hamburger></Hamburger>
      </div>
    </div>
  );
}

export default App;
