import React from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../../store/users'
import { ReactComponent as UserPic } from './img/userpic.svg'

type UserItemProps = {
  user: User
}

const UserItem: React.FC<UserItemProps> = props => {
  const { user } = props
  return (
    <div className="userslist__item card">
      <NavLink to={`/albums/${user.id}`}>
        <div className="card__inner">
          <div className="userslist__item__pic card__inner__image">
            <UserPic />
          </div>
          <div className="userslist__item__info card__inner__info">
            <div className="username">{user.name}</div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default UserItem
