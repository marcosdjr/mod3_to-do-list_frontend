import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Insert from './pages/Insert';
import View from './pages/View';
import Edit from './pages/Edit';



function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/insert" element={<Insert/>} />
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </div>
    );
  }
  
  export default App;
  