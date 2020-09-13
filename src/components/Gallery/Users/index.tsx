import React from 'react'
import { User } from '../../../store/gallery'
import UsersList from './UsersList'

export interface UsersProps {
  users: User[]
}

const UsersListContainer: React.FC<UsersProps> = (props: UsersProps) => {
  const { users } = props
  return <UsersList users={users} />
}

export default UsersListContainer
