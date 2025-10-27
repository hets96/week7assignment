import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Destiny Guardian Stories</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/create">Share Your Story</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;