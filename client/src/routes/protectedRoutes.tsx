import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext, UserContextType } from '../store/useAuth'

type Props = {
    children : React.ReactNode
}

const ProtectedRoutes = ({children}: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useContext<UserContextType>(UserContext);
  return ( isLoggedIn() ? 
        <>{children}</>
        :
        ( <Navigate to="/login" state={{ from : location}} replace /> )
    )
}

export default ProtectedRoutes