import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Router } from 'workbox-routing';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        Welcome to My World
      </Route>
      <Route path="/second">
        I failed lots of time but I will not loose hope, Before 2023 I will be
        software developer
      </Route>
      <Route>this is 404 page</Route>
    </Switch>
  );
}

export default App;
