import { Router, Switch, Route } from "react-router";
import TheHeader from "./components/TheHeader/TheHeader";
import HomePage from "./pages/HomePage/HomePage";
import CreateStream from "./pages/CreateStream/CreateStream";
import ListStream from "./pages/ListStream/ListStream";
import "./App.scss";

function App() {
  return (
    <>
      <TheHeader />
      <div className="main-content">
        <Switch>
          <Route exact path="/streams/list">
            <ListStream />
          </Route>
          <Route exact path="/streams/new">
            <CreateStream />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
