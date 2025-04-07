import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import LoginRegister from './pages/LoginRegister';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginRegister />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  );
}

export default App;