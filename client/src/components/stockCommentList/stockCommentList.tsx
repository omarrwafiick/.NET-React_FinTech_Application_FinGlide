import React from 'react'
import StockComment from '../stockComment/stockComment'
import { Comment } from '../../models/comment'

type Props = {
    comments:Comment[]
}

const StockCommentList = ({comments}: Props) => {
  return (
    <div className=''>
        {
            comments ?  
            comments.map((c, i)=>{
                return <StockComment key={i} comment={c}/>    
            })
            :
            <>*No comment</>
        }  
    </div>
  )
}

export default StockCommentList