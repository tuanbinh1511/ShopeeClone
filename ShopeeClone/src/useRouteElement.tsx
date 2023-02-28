import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constant/path'
import { AppContext } from './contexts/app.context'
import CartLayout from './layouts/CartLayout'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
import Cart from './pages/Cart'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProductList from './pages/ProductList'
import Profile from './pages/User/Pages/Profile'
import Register from './pages/Register'
import UserLayout from './pages/User/Layout/UserLayout'
import ChangePassword from './pages/User/Pages/ChangePassword'
import HistoryPurchase from './pages/User/Pages/HistoryPurchase'

function ProtectRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
function RejectRoute() {
  const { isAuthenticated } = useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectRoute />,
      children: [
        {
          path: path.login,
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <CartLayout>
              <Cart />
            </CartLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <UserLayout />
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: <Profile />
            },
            {
              path: path.changePassword,
              element: <ChangePassword />
            },
            {
              path: path.historyPurchase,
              element: <HistoryPurchase />
            }
          ]
        }
      ]
    },
    {
      path: path.productDetail,
      index: true,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: path.home,
      index: true,
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    }
  ])
  return routeElements
}
