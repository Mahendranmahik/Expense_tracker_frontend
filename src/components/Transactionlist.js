import { format } from 'date-fns'
import React, { useContext } from 'react'
import {  Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Globalcontext } from '../Context/Globalcontext'
import Trans from './Trans'

const Transactionlist = () => {

    const {transactions} =useContext(Globalcontext)
    // const date=format(new Date(),'MMM dd, yyyy pp')



  return (
    <div className='mt-4 '>
        <p className='display-5 fs-2 fw-1'>Transactions: <span><i className='fs-4 bi bi-arrow-left-right'></i></span></p>

    <ListGroup as="ol" numbered>
      {
        (transactions.length>0)?(
          transactions.map((transaction=>(<Trans key={transaction.id}  transaction={transaction} />)))
        ):<div className='text-center'>
             <p className='display-5 fs-2'>your list is empty <i className='text-warning bi bi-trash'></i></p>
        </div>
      }

       

     </ListGroup>
    </div>
  )
}

export default Transactionlist