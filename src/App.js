import "./App.css";
import Nav from "./Components/Nav";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Detail from "./Components/Detail";
import Cart from "./Components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store/index";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <ToastContainer />
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Detail} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
