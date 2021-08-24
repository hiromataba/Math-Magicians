import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/navbar';
import Quote from './components/quote';
import Home from './components/home';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/quote">
          <Navbar />
          <Quote />
        </Route>
        <Route path="/navbar">
          <Navbar />
        </Route>
        <Route path="/calculator">
          <Navbar />
          <Calculator />
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
