import { PrivateRouter } from '@/components/privateRouter'
import React from 'react'

const Profile = () => {
  return (
    <PrivateRouter allowedRoles={['member']}>
      <div>page</div>
    </PrivateRouter>

  )
}

export default Profile