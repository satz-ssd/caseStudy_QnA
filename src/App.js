import "./App.css";
// import UploadQuestion from './components/UploadQuestion_test';
// import Home from "./components/Home_test";
import Home from "./components/Home_test";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import SubmitModal from "./components/submitModal/SubmitModal";
import Navbar_test from "./components/navbar/Navbar_test";
import SearchParent from "./components/searchPage/SearchParent";
import PageNotFound from './components/pageNotFound/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
        <Navbar_test />
        {/* <SubmitModal /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchParent />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
