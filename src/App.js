import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Attendence from './components/Attendence';
import Teams from './components/Teams';
import Payments from './components/Payments';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
