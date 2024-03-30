import React, { useContext } from 'react'
import { Globalcontext } from '../Context/Globalcontext'

const Heading = () => {

  const {transactions}=useContext(Globalcontext)
  const amounts=transactions.map((transaction=>transaction.amount))

  const total=amounts.reduce((amt,item)=>(amt=amt+item),0).toFixed(2)
  console.log(total)

  return (
    <div className=" text-center mt-5 p-3">
        <h6 className="display-5 text-primary" > Expense Tracker</h6>
        <div className=" mt-3">
            <p className=' fs-3'>Your Amount <i className='bi bi-cash-stack'></i></p>
            <p id={total<0?'minus':'plus'} className=' fs-4  fw-bolder'><i className='bi bi-currency-rupee'></i>{total}</p>
        </div>
    </div>
  )
}


export default Heading