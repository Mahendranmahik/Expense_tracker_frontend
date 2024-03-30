import React, { useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap'

const Loginform = ({onlogin}) => {

    const [user,setuser]=useState("")
    const [password,setpassword]=useState("")

const handlesubmit=(e)=>{

    e.preventDefault();
    onlogin(user,password)
}

  return (
    <div className='ms-5 text-bg-dark'>
        <h1 style={{fontWeight:"700",fontFamily:"Trebuchet MS"}} className=' text-warning display-5 mb-5'>Welcome to Expense Tracker</h1>

        <Form onSubmit={handlesubmit}>
            
            <FormGroup className='my-4 '>
                <FormLabel className='display-6 mb-3'>Username</FormLabel>
                <FormControl id="user" type='text' placeholder='enter your user name'
                value={user}
                onChange={(e)=>setuser(e.target.value)} required>
                </FormControl>
            </FormGroup>

            <FormGroup className='my-4 '>
                <FormLabel  className='display-6 mb-3'>Password</FormLabel>
                <FormControl id="password" type='password' placeholder='enter your user name'
                value={password}
                onChange={(e)=>setpassword(e.target.value)} required>
                </FormControl>
            </FormGroup>

            <Button type='submit' className='text-bg-danger mt-4 px-5'>login</Button>
           
        </Form>
        
    </div>
  )
}

export default Loginform