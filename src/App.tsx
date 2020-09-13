import React from 'react'
// import { Route, BrowserRouter as Router } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router' // react-router v4/v5
import Gallery from './components/Gallery'
import './stylesheets/main.scss'
import { history } from './store'

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" render={() => <Gallery />} />
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default App
