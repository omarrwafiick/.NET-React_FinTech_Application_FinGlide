import React from 'react' 
import { ClipLoader } from 'react-spinners' 

type Props = {
  isLoading?: boolean
}

const Loader = ({isLoading = true}: Props) => {
  return (
     <>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ClipLoader size={35} loading={isLoading} color='#34AFFB' aria-label='loading spinner' />
      </div>
     </>
  )
}  
export default Loader