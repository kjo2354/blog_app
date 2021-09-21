import { BrowserRouter, Route } from "react-router-dom";
import about from './pages/about';
import contact from './pages/contact';
import experience from './pages/experience';
import Navigation from './Navigation';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Route exact path="/" component={about} />
        <Route exact path="/about" component={about} />
        <Route path="/contact" component={contact} />
        <Route path="/experience" component={experience} />
      </BrowserRouter>
  );
}

export default App;
