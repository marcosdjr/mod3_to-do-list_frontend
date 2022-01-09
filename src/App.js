import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import View from './pages/View';


function App() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/insert" element={<Cadastro/>} />
          <Route path="/view/:id" element={<View/>}/>

          {/* <Route path="/view/:id" element={<View/>}/> */}
        </Routes>
      </div>
    );
  }
  
  export default App;
  