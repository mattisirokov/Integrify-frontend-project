import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Country from './pages/SingleCountry'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/products/:name" component={Country} />
  </Switch>
)

export default Routes
