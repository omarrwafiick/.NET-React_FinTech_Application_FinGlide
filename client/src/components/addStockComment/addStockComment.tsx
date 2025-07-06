import React, { useContext, useRef, useState } from 'react'
import Button from '../form/button'
import { CreateCommentApi } from '../../services/commentApi'
import Input from '../form/input'
import { UserContext, UserContextType } from '../../context/useAuth'
import toaster from 'react-hot-toast';
import { getErrorMessage, isLengthBetween } from '../../helpers/validators'

type Props = {
    ticker:string,
    getComments:any
}

const AddStockComment = ({ticker, getComments}: Props) => {
  const { user } = useContext<UserContextType>(UserContext);
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [disable, setDisable] = useState(false)
  const titleRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  const submitComment = async (e)=>{
    e.preventDefault();  
    let valid = true;
    setDisable(true);  

    if(!isLengthBetween(title,3,280) && titleRef.current){  
      titleRef.current.innerText = getErrorMessage("commentTitle");
      valid = false;
    } else if (titleRef.current) {
      titleRef.current.innerText = "";
    }

    if(!isLengthBetween(content,3,2080) && contentRef.current){  
      contentRef.current.innerText = getErrorMessage("commentContent");
      valid = false;
    } else if (contentRef.current) {
      contentRef.current.innerText = "";
    }

    if(valid){ 
      const result = await CreateCommentApi(title, content, ticker, user.email)  
      if(result <= 204){
          setTitle('');
          setContent('');
          toaster.success("Comment was created successfully");
          getComments();
      }    
      else{
          toaster.error("Network error occured")
      }  
    }
    setDisable(false);
  }
  return (
    <div className='w-7/12 mb-6  mt-16'>
        <form onSubmit={submitComment}>  

          <Input placeholder='title' value={title} onChange={(e)=> setTitle((e.target.value))} type='text' /> 
          <span ref={titleRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>            
          
          <textarea value={content} onChange={(e)=> setContent(e.target.value)} required placeholder='Write a comment...' rows={6} className='text-sm w-full p-3 mt-6 border-2 border-[#34AFFB]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#37FB34] placeholder-gray-400 transition duration-200'/>
          <span ref={contentRef} className="min-h-[1.25rem] text-red-500 text-sm mt-2 mb-1 w-full"></span>            

          <Button disable={disable} title='comment' type='submit'/>
        </form>
    </div>
  )
}

export default AddStockComment