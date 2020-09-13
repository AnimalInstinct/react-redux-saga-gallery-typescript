import React from 'react'
// import { Route, BrowserRouter as Router } from 'react-router-dom'

import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router' // react-router v4/v5
import UsersList from './components/UsersList'
import UserAlbumsList from './components/UserAlbumsList'
import './stylesheets/main.scss'
import { history } from './store'

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            exact
            path="/user/:userId/albums"
            render={() => <UserAlbumsList />}
          />
          <Route exact path="/" render={() => <UsersList />} />
        </Switch>
      </ConnectedRouter>
    </div>
  )
}

export default App
