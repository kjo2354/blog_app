import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import about from './pages/about';
import contact from './pages/contact';
import experience from './pages/experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/experience" component={experience} />
      </BrowserRouter>
    </div>
  );
}

export default App;
