
import './CSS/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import landingPage from './landingPage/landingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'Component={landingPage}/>
      </Routes>
    </Router>
  );
}

export default App;