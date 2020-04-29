import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";

//components
import Homepage from "./pages/Homepage/index.js";
import Profile from "./pages/Profile/index.js";
import Workstation from "./pages/Workstation/index.js";
import Navbar from "./components/Navbar.js";

function App() {
  const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/workstation" component={Workstation} />
            <Route path="/profile" component={Profile} />
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
