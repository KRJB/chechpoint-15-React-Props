import  Profile  from './profile/Profile.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container , Nav,Form ,Button} from 'react-bootstrap';


function App() {
  const style1 ={color:" #648aaf" , marginLeft : " 60px",marginTop: '20px'}
  const style2 ={color: "#767d83" ,marginTop: '20px'}
  const section={  marginLeft: '7%'}
  return (
    <div>
       <Navbar  variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#pricing">Work</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <h1 style={{color:" #648aaf",marginLeft : " 60px",marginTop: '60px'}}>About Me</h1>
      <hr></hr>
     
    <div >
    <Profile name="khalil Rejeb" profession="Mechanical Engineer & Web Development Student"
    bio1="i'm graduated as a mechanical engineer but i aim to begin a new career in web development" 
    bio2="and i found this chance with GOMYCODE,i had some experience in programming but i hope  " 
    bio3="to gain more through their courses " src='/Photo.jpg' ></Profile>
    </div>
   
      <h1 style={style1}>Work </h1>
    <hr></hr>
  

    <div style={section}>
    <h4 style={style2}> Experiences  </h4>
        <li className='para'>
            Methods Engineer at SAFRAN Tunisia
        </li> 
        <li className='para'>
            End Of Studies Project at WeWire Hammamet Tunisia
        </li> 
        <li className='para'>
            3 internships in different fields such as automotive and PPE production
        </li> 
    

        <h4 style={style2}> Associative Life  </h4>
        <li className='para'>
            Vice President of "Robotics Club ING.ENIM"
        </li> 
        <li className='para'>
            Mechanical training manager of "Robotics Club ING.ENIM"
        </li> 
        <li className='para'>
            Active member in "Enactus ENIM Club"
        </li> 
        <li className='para'>
            Active member in "Engineer's Charity Club ING.ENIM"
        </li> 
    </div>
  
    <h1 style={style1}>Resume </h1>
    <hr></hr>

    <div style={section}>
        <h4 style={style2}> Education and Trainings</h4>
        <li className="para">
            Currentelly Full-Stack Javascript student in Gomycode
        </li> 
        <li className="para">
            National Engineering Diploma in Mechanical Engineering from the National School of Engineers of Monastir        
        </li> 
        <li className="para">
            Preparation for the Contest Engineering Exam at Preparatory Institute for Engineering Studies of Nabeul
        </li> 
        <li className="para">
            Technical Baccalaureate Diploma from Mahmoud Messadi Nabeul High School
        </li> 
        
        <h4 style={style2}> Certifications</h4>
        <li className="para">
            CSWP        
        </li> 
        <li className="para">
            CSWA-S 
        </li> 
        <li className="para">
            CSWPA-DT
        </li> 
        <li className="para">
            CSWPA-SM
        </li>
    </div>
    
    <h1 style={style1}>Contact </h1>
    <hr></hr>
    
   
<div style={section}>
        <h4 style={style2}> To Contact Me</h4>
        <li className="para">
            Email : khalilrejeb0@gmail.com
        </li>
        <li className="para">
             Phone :(+216) 94 131 015
        </li>
      
        <h4 style={style2}> To send Me a Direct Message</h4>
      <div id='form'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter your name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="email" placeholder="write your message here" />
      </Form.Group>
   
      <Button variant="primary" type="submit">
        send
      </Button>
    </Form>
    </div>
  </div>
  

  <footer style={{marginTop: '30px'}}>
    <p>copyright © :<b>Khalil REJEB</b></p>

  </footer>
    </div>
  );
}

export default App;
