import React from 'react'
import { Comment } from '../../models/comment'

type Props = {
  comment: Comment
}

const StockComment = ({ comment }: Props) => {
  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-5 border border-gray-100 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className='w-8/12'>
          <h2 className="text-lg font-semibold text-gray-800">{comment?.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{new Date(comment?.createdAt).toLocaleString()}</p>
        </div>
        <div className="w-3/12 text-start">
          <p className="text-sm font-medium text-[#34AFFB]"><a className='text-gray-400 '>By : </a>{comment?.userDto?.userName}</p>
          <p className="text-xs text-gray-400">{comment?.userDto?.email}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{comment?.content}</p>
    </div>
  )
}

export default StockComment
