import "./App.css";
// import UploadQuestion from './components/UploadQuestion_test';
// import Home from "./components/Home_test";
import Home from "./components/Home_test";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar_test from "./components/Navbar_test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Search__Page from "./components/Search__Page_test";
import SubmitModal from "./components/submitModal/SubmitModal";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <ErrorBoundary> */}
        <Navbar_test />
        {/* <SubmitModal /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search__Page />
          </Route>
        </Switch>
        {/* </ErrorBoundary> */}
      </div>
    </Router>
  );
}

export default App;
