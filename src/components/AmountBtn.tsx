import React from 'react'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

interface AmountBtnProps {
  action : "plus" | "minus";
  func: () => void;
}

const AmountBtn:React.FC<AmountBtnProps> = ({action, func}) => {
  return (
    <div onClick={func}>{
      action === "plus" ? (
          <AiOutlinePlusCircle size={30}/>
      ) : (
          <AiOutlineMinusCircle size={30}/>
      )
    }</div>
  )
}

export default AmountBtn