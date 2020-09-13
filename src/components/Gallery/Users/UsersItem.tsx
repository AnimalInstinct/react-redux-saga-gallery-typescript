import React, { useEffect } from 'react'
import { User } from '../../../store/gallery'
import { NavLink } from 'react-router-dom'
import { ReactComponent as UserPic } from './img/userpic.svg'

type UsersItemProps = {
  user: User
}

const UserItem: React.FC<UsersItemProps> = (props: UsersItemProps) => {
  const { user } = props
  console.log('User Item')
  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER_ALBUMS', userId: user.id })
  // }, [])
  return (
    <div className="userslist__item card">
      <NavLink to={`/user/${user.id}/albums`}>
        <div className="card__inner">
          <div className="userslist__item__pic card__inner__image">
            <UserPic />
          </div>
          {user.albums && (
            <div className="userslist__item__counter">
              {user.albums?.length} albums
            </div>
          )}
          <div className="userslist__item__info card__inner__info">
            <div className="username">{user.name}</div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default UserItem
