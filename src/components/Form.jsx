import React, { useState } from 'react'

const Form = ({addItemToList}) => {
    const [myCosts, setMyCosts] = useState({type: '', cost: 0})
    const submitHandler = (e) =>{
        e.preventDefault();
        addItemToList(myCosts);
        setMyCosts({type: '', cost: 0});
    }
    const typeHandler = (e) => {
        setMyCosts({...myCosts, type: e.target.value});
    }
    const costHandler = (e) => {
        setMyCosts({...myCosts, cost: e.target.value});
    }
  return (
    <div className='dv-form-container'>
        <form className='frm-main' onSubmit={submitHandler}>
            <div className='dv-content'>
                <input type="text" className='txt-type' onChange={typeHandler} value={myCosts.type} placeholder='شرح هزینه' />
                <input type="text" className='txt-cost' onChange={costHandler} value={myCosts.cost} placeholder='مبلغ هزینه' />
            </div>
            <div className='dv-button'>
                <button className='btn-save'>ذخیره</button>
            </div>
        </form>
    </div>
  )
}

export default Form