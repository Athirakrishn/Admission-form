import * as React from 'react';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './App.css'
import { Button } from '@mui/material';

function App() {
    const [Course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const handleRegister =(e)=>{
   console.log(e);
   
     swal({
      title: "Confirm Registration",
      text: "Do you want to submit this admission form?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        swal("Success!", "Your admission form has been submitted.", "success");
      } else {
        swal("Cancelled", "Your form was not submitted.", "info");
      }
    });
  }
 const handleCancel =()=>{
      swal("Form Cleared", "All fields have been reset.", "info");

 }
  
 
  return (
    <>

   <div className="container p-5 rounded-4 shadow-lg my-5 " style={{ backgroundColor: "#d4e8f5", width: "800px" }}>
          <h2 className="text-center mb-4 "  > Higher Secondary Admission Form</h2>
          <form className="d-flex flex-column gap-3">
          <TextField label="Full Name " variant="standard"  required/>
          <TextField label="Address" variant="standard" name="address" multiline rows={2} required/>
          <TextField label="Mobile" variant="standard"  name="mobile"  required/>
          <TextField label="Email" type="email" variant="standard" name="email" required />
         
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
          <TextField label="Date Of Birth  " variant="standard"  required/>
          <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Course</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={Course}
      label="Course"
      onChange={handleChange}
    >
      <MenuItem value={'Biology'}>Biology</MenuItem>
      <MenuItem value={'ComputerScience'}>Computer Science</MenuItem>
      <MenuItem value={'Commerce'}>Commerce</MenuItem>
      <MenuItem value={' Humanities'}> Humanities</MenuItem>
    </Select>
  </FormControl>
     <div className='d-flex justify-content-evenly my-3'>
       <button onClick={handleRegister} className='btn btn-success'>REGISTER 
        </button> 
       <button className='btn btn-danger'>CANCEL </button> 
     </div>
  
      
          </form>
  </div>

    </>
  )
}

export default App




