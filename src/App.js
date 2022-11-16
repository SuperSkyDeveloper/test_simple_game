import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/quiz" element={<Quiz />}/>
            <Route path="/result" element={<Result />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
