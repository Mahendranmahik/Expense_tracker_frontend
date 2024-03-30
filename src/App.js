import { Col, Container, Row } from "react-bootstrap";
import "./App.css"
import Heading from "./components/Heading";
import Showcase from "./components/Showcase";
import Transactionlist from "./components/Transactionlist";
import Addtransaction from "./components/Addtransaction";
import { GlobalcontextProvider } from "./Context/Globalcontext";
import { useState } from "react";
import Loginform from "./components/Loginform";

function App() {

  const[isloggedin,setisloggedin]=useState(true)

const handlelogin=(user,password)=>{
  
  if(user==="mahi" && password === "1211"){
    setisloggedin(false)
  }
  else{
    alert("invalid credentials");
  }
}
  

  return (
    <div className="text-bg-dark">
    
   {isloggedin ? (
      <Container fluid className="  text-bg-dark d-flex justify-content-center align-items-center vh-100"> 

          <Row>
            <Col md={12}><Loginform  onlogin={handlelogin}/></Col>
          </Row>
             
      </Container>  
   ):(
    <GlobalcontextProvider>
          <Container fluid className=" p-5 text-bg-dark" >

          <Row>
            <Col md={6}><Heading/></Col>
            
            <Col className="mt-5" md={5}><Showcase/></Col>
            
            <Col md={7}><Transactionlist/></Col>

            <Col md={5}><Addtransaction/></Col>
          </Row>
          
        </Container>
    </GlobalcontextProvider>)}

    </div>
  );
}

export default App;
