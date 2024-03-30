import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Globalcontext } from '../Context/Globalcontext'


const Addtransaction = () => {
    const {addtrans}=useContext(Globalcontext)

    

    const onsubmit=(e)=>{
        e.preventDefault()
        

       

        const newtrans={

           
            transaction_id:Math.floor(Math.random()*100000000),
            trasaction_date:new Date().toISOString(),
            topic:title,
            desp:remark,
            amount:Number(amt),
           }


          
        addtrans(newtrans)
        settitle('')
        setamt('')
        setremark('')
        
       
    }

     
    const [title,settitle]=useState('')
    const [amt,setamt]=useState()
    const [remark,setremark]=useState('')
    

    
    
  return (
    <div className='m-3'>
        <p className='display-5 fs-2 fw-1'>Add Transaction: <i className='bi bi-plus-circle-fill'></i></p>
   <Form onSubmit={onsubmit} className=' p-2 px-3'>
    <Form.Group className='my-3'>
        <Form.Label htmlFor="title">Title:</Form.Label>
        <Form.Control id="title" type='text'placeholder='Enter Title here'
        value={title}
        onChange={(e)=>settitle(e.target.value)} required ></Form.Control>
    </Form.Group>

    <Form.Group className='my-3 '>
        <Form.Label  htmlFor="amount">Amount:</Form.Label>
        <Form.Control id="amount" className='text-bg-light' type='number'placeholder='Enter Amount here'
         value={amt}
         onChange={(e)=>setamt(e.target.value)} required></Form.Control>
    </Form.Group>

    <Form.Group className='my-3'>
        <Form.Label  htmlFor="remarks">Remarks:</Form.Label>
        <Form.Control id="remarks" type='text'placeholder='Enter Remarks here'
         value={remark}
         onChange={(e)=>setremark(e.target.value)}></Form.Control>
    </Form.Group>

    <div className='text-end mt-3'>
        <Button className='px-5' size='lg' type="submit">Add</Button>
    </div>

   </Form>
   </div>
  )
}

export default Addtransaction