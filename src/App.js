import { Router, Switch, Route } from "react-router";
import TheHeader from "./components/TheHeader/TheHeader";
import TheFooter from "./components/TheFooter/TheFooter";
import SideContacts from "./components/SideContacts/SideContacts";
import HomePage from "./pages/HomePage/HomePage";
import CreateStream from "./pages/CreateStream/CreateStream";
import ListStream from "./pages/ListStream/ListStream";
import EditStream from "./pages/EditStream/EditStream";
import SingleStream from "./pages/SingleStream/SingleStream";

import "./App.scss";

function App() {
  return (
    <>
      <TheHeader />
      <SideContacts />
      <div className="main-content">
        <Switch>
          <Route exact path="/streams/list">
            <ListStream />
          </Route>
          <Route exact path="/streams/new">
            <CreateStream />
          </Route>
          <Route exact path="/streams/:id">
            <SingleStream />
          </Route>
          <Route exact path="/streams/edit/:id">
            <EditStream />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
      <TheFooter />
    </>
  );
}

export default App;
