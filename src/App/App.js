import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "../scenes/Home/Home";
import Characters from "../scenes/Characters/Characters";
import NotFound from "../scenes/NotFound/NotFound";

const navigation = [
  { route: "/timeline", title: "Timeline" },
  { route: "/pcs", title: "Player Characters" },
  { route: "/npcs", title: "Non-Player Characters" },
  { route: "/locations", title: "Locations" },
];

function App() {
  return (
    <Layout navigation={navigation}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/pcs">
          <Characters />
        </Route>
        <Route path="/npcs">
          <NPCs />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

function Timeline() {
  return (
    <>timeline</>
  );
}
function NPCs() {
  return (
    <>npcs</>
  );
}
function Locations() {
  return (
    <>locations</>
  );
}
