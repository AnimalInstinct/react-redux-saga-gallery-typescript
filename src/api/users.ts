import { User } from '../store/users'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const fetchUsers = async () => {
  const res = await fetch(`${baseUrl}/users`)
  const authors = (await res.json()) as User[]
  return authors
}
