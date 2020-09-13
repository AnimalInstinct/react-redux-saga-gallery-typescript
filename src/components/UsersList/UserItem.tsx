import React, { useEffect } from 'react'
import { User } from '../../store/users'
import { NavLink } from 'react-router-dom'
import { ReactComponent as UserPic } from './img/userpic.svg'
import { withRootState } from '../../store'
import { push } from 'connected-react-router'

type UserItemProps = {
  user: User
}

const UserItem: React.FC<UserItemProps> = withRootState(
  ({ albums, router }) => ({ albums: albums.albums, router: router }),
  ({ dispatch, albums, router, user }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_USER_ALBUMS', userId: user.id })
    }, [])
    return (
      <div className="userslist__item card">
        <NavLink to={`/albums/user/${user.id}`}>
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
)

export default UserItem
