import React from 'react'
import { Switch, Route } from 'react-router'
import { User } from '../../store/gallery'
import Users from './Users'
import Albums from './Albums'

export interface GalleryProps {
  users: User[]
}

const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
  const { users } = props
  return (
    <Switch>
      <Route exact path="/" render={() => <Users users={users} />} />
      <Route path="/user/:userId/albums" component={Albums} />
    </Switch>
  )
}

export default Gallery
