import React, { useContext } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { Globalcontext } from '../Context/Globalcontext'

const Trans = ({transaction}) => {
    const sign=transaction.amount<0?'-':'+'

    const {deletetrans}=useContext(Globalcontext)

    
  return (
    
    <ListGroupItem  as="li"
    className='text-bg-dark d-flex justify-content-between align items-start'>
                
       <div className='ms-2 me-auto'> 
            <div className='text-capitalize fw-bold'>{transaction.topic}</div>
            <h6 id={transaction.amount<0?'minus':'plus'} className='mt-2'>{sign}<i className='bi bi-currency-rupee'></i> 
            {Math.abs(transaction.amount)}</h6>  
      </div>
        <div className='me-5'>
          <p>{transaction.desp}</p>
          </div>    
             
            
        <div className='text-center'>
              <small className='text-secondary mx-2'>{transaction.trasaction_date}</small>
              <p className='mt-2'>TXID:{transaction.transaction_id}</p>
        </div>

        <div>
        <Button  className='mt-3 text-bg-danger' onClick={()=>deletetrans(transaction.id)}><i className='bi bi-trash'></i>clear</Button>
        </div>
            
            
                 
    </ListGroupItem>
  )
}

export default Trans