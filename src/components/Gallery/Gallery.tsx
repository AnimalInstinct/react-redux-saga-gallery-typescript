import React from 'react'
import { Switch, Route } from 'react-router'
import { User } from '../../store/gallery'
import Users from './Users'
import Albums from './Albums'
import Photos from './Photos'

export interface GalleryProps {
  users: User[]
}

const Gallery: React.FC<GalleryProps> = (props: GalleryProps) => {
  const { users } = props
  return (
    <Switch>
      <Route exact path="/" render={() => <Users users={users} />} />
      <Route exact path="/user/:userId/albums" component={Albums} />
      <Route exact path="/user/:userId/album/:albumId" component={Photos} />
    </Switch>
  )
}

export default Gallery
