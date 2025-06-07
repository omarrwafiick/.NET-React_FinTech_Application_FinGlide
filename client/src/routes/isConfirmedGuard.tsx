import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { UserContext, UserContextType } from '../context/useAuth'

type Props = {
    children : React.ReactNode
}

const IsConfirmedGuard = ({children}: Props) => {
  const location = useLocation();
  const { isConfirmed } = useContext<UserContextType>(UserContext);
  return ( isConfirmed() ? 
        <>{children}</>
        :
        ( <Navigate to="/" state={{ from : location}} replace /> )
    )
}

export default IsConfirmedGuard