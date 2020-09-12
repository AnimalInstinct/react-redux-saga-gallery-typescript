import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import UsersList from './components/UsersList'
import UserAlbumsList from './components/UserAlbumsList'
import './stylesheets/main.scss'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/albums/:userId" render={() => <UserAlbumsList />} />
        <Route exact path="/" render={() => <UsersList />} />
      </Router>
    </div>
  )
}

export default App
