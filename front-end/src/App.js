import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./redux/reducers";

//components
import Homepage from "./pages/Homepage";
import Workstation from "./pages/Workstation";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

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
