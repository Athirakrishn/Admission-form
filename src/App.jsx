// import * as React from 'react';
// import { useState } from 'react'
// import TextField from '@mui/material/TextField';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import './App.css'
// import { Button } from '@mui/material';

// function App() {
//     const [Course, setCourse] = React.useState('');

//   const handleChange = (event) => {
//     setCourse(event.target.value);
//   };
    
//   return (
//     <>

//    <div className="container p-5 rounded-4 shadow-lg my-5 " style={{ backgroundColor: "#d4e8f5", width: "800px" }}>
//           <h2 className="text-center mb-4 "  > Higher Secondary Admission Form</h2>
//           <form className="d-flex flex-column gap-3">
//           <TextField label="Full Name " variant="standard"  required/>
//           <TextField label="Address" variant="standard" name="address" multiline rows={2} required/>
//           <TextField label="Mobile" variant="standard"  name="mobile"  required/>
//           <TextField label="Email" type="email" variant="standard" name="email" required />
         
//     <FormControl>
//     <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//     <RadioGroup
//       aria-labelledby="demo-radio-buttons-group-label"
//       defaultValue="female"
//       name="radio-buttons-group"
//     >
//       <FormControlLabel value="female" control={<Radio />} label="Female" />
//       <FormControlLabel value="male" control={<Radio />} label="Male" />
//       <FormControlLabel value="other" control={<Radio />} label="Other" />
//     </RadioGroup>
//   </FormControl>
//           <TextField label="Date Of Birth  " variant="standard"  required/>
//           <FormControl fullWidth>
//     <InputLabel id="demo-simple-select-label">Course</InputLabel>
//     <Select
//       labelId="demo-simple-select-label"
//       id="demo-simple-select"
//       value={Course}
//       label="Course"
//       onChange={handleChange}
//     >
//       <MenuItem value={'Biology'}>Biology</MenuItem>
//       <MenuItem value={'ComputerScience'}>Computer Science</MenuItem>
//       <MenuItem value={'Commerce'}>Commerce</MenuItem>
//       <MenuItem value={' Humanities'}> Humanities</MenuItem>
//     </Select>
//   </FormControl>
//      <div className='d-flex justify-content-evenly my-3'>
//        <button onClick={''} className='btn btn-success'>REGISTER 
//         </button> 
//        <button onClick={' '} className='btn btn-danger'>CANCEL </button> 
//      </div>
  
      
//           </form>
//   </div>

//     </>
//   )
// }

// export default App



import * as React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import './App.css';
import swal from 'sweetalert';
import { FaFileAlt } from "react-icons/fa";


function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is required'),
      address: Yup.string().required('Address is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Enter valid 10-digit mobile number')
        .required('Mobile is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      gender: Yup.string().required('Gender is required'),
      dob: Yup.date().required('Date of Birth is required'),
      course: Yup.string().required('Course is required'),
    }),
    onSubmit: (values) => {
swal({
  title: "Are you sure?",
  text: "Once added, you are not be able to edit this details!!!!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Registered Successfully!", {
      icon: "success",
    }); 
  } else {
    swal(" check your details!");
  }
});

       },
  });

  const handleCancel = () => {
    formik.resetForm();
  };

  return (
  
   <div >
        <div className="container p-5 rounded-4 shadow-lg my-5" style={{ backgroundColor: "#fdfdfd", width: "800px" }}>
          <h2 className="text-center text-primary mb-4"> <FaFileAlt />Higher Secondary Admission Form</h2>
         <div className='container rounded-3 my-5 p-5' style={{backgroundColor: "#d6eaf7", }}>
            <form className="d-flex flex-column gap-3" onSubmit={formik.handleSubmit}>
      
              <TextField
                label="Full Name"
                variant="standard"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                required
              />
      
              <TextField
                label="Address"
                variant="standard"
                name="address"
                multiline
                rows={2}
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                required
              />
      
              <TextField
                label="Mobile"
                variant="standard"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                required
              />
      
              <TextField
                label="Email"
                type="email"
                variant="standard"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                required
              />
      
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                {formik.touched.gender && formik.errors.gender && (
                  <div style={{ color: "red", fontSize: "14px" }}>{formik.errors.gender}</div>
                )}
              </FormControl>
      
              <TextField
                label="Date of Birth"
                type="date"
                variant="standard"
                name="dob"
                InputLabelProps={{ shrink: true }}
                value={formik.values.dob}
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}
                required
              />
      
              <FormControl fullWidth>
                <InputLabel>Course</InputLabel>
                <Select
                  name="course"
                  value={formik.values.course}
                  onChange={formik.handleChange}
                  error={formik.touched.course && Boolean(formik.errors.course)}
                >
                  <MenuItem value={'Biology'}>Biology</MenuItem>
                  <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                  <MenuItem value={'Commerce'}>Commerce</MenuItem>
                  <MenuItem value={'Humanities'}>Humanities</MenuItem>
                </Select>
                {formik.touched.course && formik.errors.course && (
                  <div style={{ color: "red", fontSize: "14px" }}>{formik.errors.course}</div>
                )}
              </FormControl>
      
              <div className="d-flex justify-content-evenly my-3">
                <Button type="submit" variant="contained" color="success">
                  REGISTER
                </Button>
                <Button type="button" variant="contained" color="error" onClick={handleCancel}>
                  CANCEL
                </Button>
              </div>
            </form>
         </div>
        </div>
   </div>
 
  );
}

export default App;
