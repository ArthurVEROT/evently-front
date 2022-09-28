import { Navigate, Outlet } from 'react-router-dom';


const ProtectedLayout = ({ authToken }) => {
  return (
    <>
      {
        authToken
          ?
          <Outlet />
          :
          <Navigate to="/auth/login" />
      }
    </>
  )
}

export default ProtectedLayout;