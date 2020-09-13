import React, { Fragment } from 'react'
import { User } from '../../../store/gallery'
import UsersItem from './UsersItem'

type UsersListProps = {
  users: User[]
}

export default function UsersList(props: UsersListProps) {
  const { users } = props
  return (
    <Fragment>
      <div className="container">
        <h1 className="header">Users</h1>
        <div className="userslist">
          {users.map(user => (
            <UsersItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
