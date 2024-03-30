import React from 'react'
import { Globalcontext } from '../Context/Globalcontext'
import { useContext } from 'react'

const Showcase = () => {

  const {transactions}=useContext(Globalcontext)
  
  const amounts=transactions.map((transaction=>transaction.amount))

  const income=amounts.filter((amt)=>amt>0)
  .reduce((amt,item)=>(amt+item),0).toFixed(2)

  const expense=(amounts.filter((amt)=>amt<0)
  .reduce((amt,item)=>(amt+item),0)*-1).toFixed(2)

  return (
    
    <div className=" mt-5 ms-4  text-center  d-flex justify-content-evenly 
          align-items-center">
        <div className=' text-start mx-3'>
         <p className='display-5 fs-3 '> Income <i className='bi bi-arrow-down-circle-fill'></i>  
           
        </p>
        <span className='display-5 fs-3 text-success fw-bolder'> <i className='bi bi-currency-rupee'></i>{income}</span>
        </div>

       

        <div className=' text-start mx-3'>
         <p className='display-5 fs-3'> Expense <i className='bi bi-arrow-up-circle-fill'></i> 
             
        </p>
        <span id='minus' className='display-5 fs-3 text- fw-bolder'><i className='bi bi-currency-rupee'></i> {expense}</span>
        </div>
       
    </div>
  )
}

export default Showcase