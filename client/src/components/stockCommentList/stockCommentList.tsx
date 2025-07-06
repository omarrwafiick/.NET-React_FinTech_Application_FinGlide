import React from 'react'
import StockComment from '../stockComment/stockComment'
import { Comment } from '../../models/comment'

type Props = {
    comments:Comment[]
}

const StockCommentList = ({comments}: Props) => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='capitalize text-2xl w-full text-start font-semibold p-4'>comments :</h1>
        {
            comments ?  
            comments.map((c, i)=>{
                return <StockComment key={i} comment={c}/>    
            })
            :
            <h1>*No comments</h1>
        }  
    </div>
  )
}

export default StockCommentList