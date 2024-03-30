import React, { createContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'

export const Globalcontext = createContext()

const initialstate={
    transactions:[
            // {id:Math.floor(Math.random()*100000000),text:'buying mobile',desc:'',amount:-18000},
            // {id:Math.floor(Math.random()*100000000),text:'cashback',desc:'',amount:200},
            // {id:Math.floor(Math.random()*100000000),text:'pay due',desc:'',amount:-2000},
            // {id:Math.floor(Math.random()*100000000),text:'credit for ',desc:'',amount:100},
        ]
}

const reducer=(state,action)=>{

    switch(action.type){

        case "fectchdata":
            return {...state , transactions :action.payload};

        case "deletetrans":
            return{...state , transactions :state.transactions.filter(transaction=>transaction.id !== action.payload)}

        case "addtrans":
            return{...state , transactions :[action.payload,...state.transactions]}
    }
}


export const GlobalcontextProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialstate)
   

    useEffect(()=>{
        load();
    },[])



    //initially loading the data (transaction from database)
    const load=async()=>{

       const result=await axios.get(`http://localhost:8080/gettrans`)
       console.log(result.data)
       dispatch( {type:"fectchdata", payload:result.data} )
      
    }

    //deleting the transaction
    const deletetrans=async(id)=>{

        await axios.delete(`http://localhost:8080/deletetrans/${id}`)
        dispatch( {type:'deletetrans', payload:id} )  
    }


    //adding the transaction
    const addtrans=async(transaction)=>{

        await axios.post(`http://localhost:8080/addtrans`,transaction)
        dispatch( {type:"addtrans", payload:transaction} )

    }
    
    return(
        <Globalcontext.Provider value={{transactions:state.transactions,deletetrans:deletetrans,addtrans:addtrans}}>
            {children}
        </Globalcontext.Provider>
    )
}
  
