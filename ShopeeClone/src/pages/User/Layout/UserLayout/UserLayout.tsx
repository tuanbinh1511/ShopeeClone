import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'

interface Props {
  children?: React.ReactNode
}

function UserLayout() {
  return (
    <div>
      <UserSideNav />
      <Outlet />
    </div>
  )
}

export default UserLayout
