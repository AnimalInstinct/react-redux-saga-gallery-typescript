import React, { useEffect } from 'react'
import { withRootState } from '../../store'

const Gallery: React.FC = withRootState(
  users => ({ users: users }),
  ({ dispatch }) => {
    useEffect(() => {
      dispatch({ type: 'FETCH_USERS' })
    }, [])
    return <h1>Gallery</h1>
  }
)

export default Gallery
