import React, { useState } from 'react'
import style from '../styles/Home.module.css'


const index = () => {
  const[num,setnum]=useState(0)
  const plus=()=>{
    setnum(num+1)
  }
  const minus=()=>{
    if(num>0){

      setnum(num-1)
    }
    else{
      alert("Value reached at zero")
    }
  }
  return (
    <div className={style.main}>
      <div className={style.center}>
         <h1 className={style.app}>Counter App</h1>
        <div className={style.heading}>
          <h1>{num}</h1>
        </div>
        <div className={style.btn}>
          <button onClick={plus} className={style.increment} >Increment</button>
          <button onClick={minus}  className={style.decrement}>Decrement</button>

        </div>

      </div>
      
    </div>
  )
}

export default index
