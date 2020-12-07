import { Router, Switch, Route } from "react-router";
import TheHeader from "./components/TheHeader/TheHeader";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

function App() {
  return (
    <>
      <TheHeader />
      <div className="main-content">
        <Switch>
          <Route exact match="/">
            <HomePage />
          </Route>
          <Route exact match="/create">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
