import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "../scenes/Home/Home";
import NotFound from "../scenes/NotFound/NotFound";

const navigation = [
  { route: "/one", title: "Who we are" },
  { route: "/two", title: "What we do" },
  { route: "/three", title: "Get in touch" },
];

function App() {
  return (
    <Layout navigation={navigation}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/one">
          <One />
        </Route>
        <Route path="/two">
          <Two />
        </Route>
        <Route path="/three">
          <Three />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

function One() {
  return (
    <>one</>
  );
}
function Two() {
  return (
    <>two</>
  );
}
function Three() {
  return (
    <>three</>
  );
}
