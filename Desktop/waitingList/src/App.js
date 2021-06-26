import {BrowserRouter as Router, Route} from "react-router-dom"
import Landing from './pages/Landing';
import Countdown from './pages/Countdown';
import './styles/landing.css'
import './styles/countdown.css'
import './App.css'


function App() {
  return (
    <div>
        <Router>
            <Route exact path='/' component={Countdown}/>
            <Route exact path='/landing' component={Landing}/>
        </Router>
    </div>
  );
}

export default App;
