import { Router, Switch, Route } from "react-router";
import TheHeader from "./components/TheHeader/TheHeader";
import HomePage from "./pages/HomePage/HomePage";
import CreateStream from "./pages/CreateStream/CreateStream";
import "./App.scss";

function App() {
  return (
    <>
      <TheHeader />
      <div className="main-content">
        <Switch>
          <Route match="/stream">
            <CreateStream />
          </Route>
          <Route exact match="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
