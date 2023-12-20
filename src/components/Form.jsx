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
        const newcCost = parseInt(e.target.value);
        setMyCosts({...myCosts, cost: newcCost});
    }
  return (
    <div className='dv-form-container'>
        <form className='frm-main' id='frmMain' name='frmMain' onSubmit={submitHandler}>
            <div className='dv-content'>
                <input type="text" id='txtType' name='txtType' className='txt-type' onChange={typeHandler} value={myCosts.type} placeholder='شرح هزینه' />
                <input type="text" id='txtCost' name='txtCost' className='txt-cost' onChange={costHandler} value={myCosts.cost} placeholder='مبلغ هزینه' />
            </div>
            <div className='dv-button'>
                <button className='btn-save'>ذخیره</button>
            </div>
        </form>
    </div>
  )
}

export default Form