import React, { useState } from "react";
import Footer from "../Footer";
import "./Contact.css";
import Navbar from "../Navbar";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [que, setQue] = useState("");
  const submitData = (e) => {
    // e.preventDefault();
    const dataObj = {
      name,
      email,
      que,
    };
    console.log(dataObj);
    setName("");
    setEmail("");
    setQue("");
  };

  return (
    <>
      <Navbar />
      <div className="contact_component">
        <div className="co-m">
          <button className="conbtn">
            <a href="#form">Contact Now</a>
          </button>
        </div>
      </div>
      <div className="main_contact" id="form">
        <div className="left_c">
          {/* width="600" height="430"  */}
          <iframe
            className="google"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Gera's%20Imperium%20Alpha,%207th%20Floor,Office%20No.%20715,716%20&%20714,%20Near%20Eon%20IT%20Park,%20Kharadi,Pune%20-%20411014&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
        <br></br>
        <div className="right_c">
          <div className="icon">
            <BsFillEnvelopeFill />
          </div>
          <h1>Contact Us</h1>
          <br></br>
          <form onSubmit={handleSubmit(submitData)}>
            <div>
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
            <div>
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
            <div>
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
            <br></br>

            <div>
              <Button variant="contained" type="submit" className="textfiled">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
