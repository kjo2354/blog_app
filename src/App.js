import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import about from './pages/about';
import contact from './pages/contact';
import experience from './pages/experience';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/experience" component={experience} />
      </Router>
    </div>
  );
}

export default App;
