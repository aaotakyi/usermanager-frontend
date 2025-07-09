import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './components/login';
import Register from './components/register';


function App() {
  return (
    <Router>
      <div className="max-w-4xl mx-auto p-4">
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
