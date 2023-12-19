import React, { useState } from 'react'

const Cost = ({data, deleteItemById}) => {
    const [myCosts, setMyCosts] = useState(data.cost)
    const creaseHandler = () => {
        data.cost = myCosts;
        setMyCosts(data.cost + 100);
    }
    const increaseHandler = () => {
        data.cost = myCosts;
        setMyCosts(data.cost - 100);
    }
    const deleteHandler = () => {
        deleteItemById(data.id);
    }
  return (
    <div className='dv-cost-box'>
        <div className='dv-content'>
            <span className='spn-type'>{data.type}</span>
            <span className='spn-cost'>{myCosts} تومان</span>
        </div>
        <div className='dv-button'>
            <button onClick={creaseHandler} className='btn-crease'>افزایش</button>
            <button onClick={increaseHandler} className='btn-increase'>کاهش</button>
            <button onClick={deleteHandler} className='btn-delete'>حذف</button>
        </div>
    </div>
  )
}

export default Cost