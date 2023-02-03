import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <SideBar />
        <Routes >
          <Route index element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
