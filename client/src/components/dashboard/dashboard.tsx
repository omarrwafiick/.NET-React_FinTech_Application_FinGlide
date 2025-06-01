import React from 'react' 
import { Outlet } from 'react-router-dom' 
type Props = { 
    children: React.ReactNode,
    ticker: string
}

const Dashboard = ({children, ticker}: Props) => {
  return (
    <div className='w-full'> 
        <div className='w-full'> 
          {children}
        </div>
        <div> 
          <Outlet context={ticker} />  
        </div>
    </div>
  )
}

export default Dashboard