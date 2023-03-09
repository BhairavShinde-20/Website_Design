import React,{useState} from 'react';
import "./Services.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Services = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//  const  navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [que, setQue] = useState("");
      // const[check,setCheck]=useState();
      const submitData = (e) => {
        // e.preventDefault();
        const dataObj = {
          name,
          email,
          que,
        };
        handleClose();
        console.log(dataObj);
        // setName("");
        // setEmail("");
        // setQue("");
        // navigate("/")
      };
  return (
    <>
      <Navbar />
       {/* react model form code start */}
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <div className='mai-model'>
        <Modal.Header>
          <Modal.Title >Tell us about your project
</Modal.Title>

        </Modal.Header >
</div>


        <br></br>
<p>The more we know, the more accurate our estimate!</p>
        {/* </div> */}
        <Modal.Body>
        <form onSubmit={handleSubmit(submitData)}>
            <div className='mai-model'>
              <FormControl>
                <TextField
                  className="textfiled"
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  type="text"
                  {...register("name", { required: true })}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && !name && (
                  <p className="err">Name is required.</p>
                )}
              </FormControl>
            </div>
            <br></br>
            <div className='mai-model'>
              <FormControl>
                <TextField
                  className="textfiled"
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  {...register("email", { required: true })}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && !email && (
                  <p className="err">Email is required.</p>
                )}
              </FormControl>
            </div>
            <br></br>
            <div className='mai-model'>
              <FormControl>
                <TextField
                  className="textfiled"
                  id="outlined-basic"
                  label="Your question"
                  variant="outlined"
                  type="text"
                  {...register("que", { required: true })}
                  onChange={(e) => setQue(e.target.value)}
                  value={que}
                />
                {errors.que && !que && (
                  <p className="err">Question is required.</p>
                )}
              </FormControl>
            </div>
<div className='mai-formgrp' >
              <FormGroup >
                  <FormControlLabel control={<Checkbox />} 
                    // {...register("check", { required: true })}
                    // onChange={(e) => setCheck(e.target.value)}
                    // value={check}
                  label="I agree to the Senwell Cookie and Policy*" />
                     {/* {errors.check && (
                  <p className="err">Please accept Senwell Cookie and Policy</p>
                )} */}
         </FormGroup>
         </div>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" >Submit</Button>
        </Modal.Footer>
          </form>
        </Modal.Body>
   
      </Modal>
        {/* react model form code end */}
      <div className="main-services-page">
        <div className="bgservices-page">
            <h1 className="sertag">UI/UX Design</h1>
            <button className="hirenow-2" onClick={handleShow}>Hire Now</button>
            
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
