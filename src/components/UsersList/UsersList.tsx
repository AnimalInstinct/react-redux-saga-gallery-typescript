import React, { Fragment } from 'react'
import { User } from '../../store/users'
import UserItem from './UserItem'

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
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    </Fragment>
  )
}
