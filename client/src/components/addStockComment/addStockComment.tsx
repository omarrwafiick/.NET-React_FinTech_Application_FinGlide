import React, { useContext, useState } from 'react'
import Button from '../form/button'
import { CreateCommentApi } from '../../services/commentApi'
import Input from '../form/input'
import { UserContext, UserContextType } from '../../context/useAuth'
import toaster from 'react-hot-toast';

type Props = {
    ticker:string
}

const AddStockComment = ({ticker}: Props) => {
  const { user } = useContext<UserContextType>(UserContext);
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [disable, setDisable] = useState(false)

  const submitComment = async (e)=>{
    e.preventDefault();  
    setDisable(true);  
    const result = await CreateCommentApi(title, content, ticker, user.email)  
    if(result === 204){
         toaster.success("Comment was created successfully");
    }   
    else{
        toaster.error("Network error occured")
    }  
    setDisable(false);
  }
  return (
    <div className='w-7/12 mb-6'>
        <form onSubmit={submitComment}>  
            <Input placeholder='Title' type='text' value={title} onChange={(e)=> setTitle(e.target.value)} />
            <textarea value={content} onChange={(e)=> setContent(e.target.value)} required placeholder='Write a comment...' rows={6} className='text-sm w-full p-3 mt-6 border-2 border-[#34AFFB]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37FB34] placeholder-gray-400 transition duration-200'/>
            <Button disable={disable} title='comment' type='submit'/>
        </form>
    </div>
  )
}

export default AddStockComment