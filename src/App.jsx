import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true };


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
