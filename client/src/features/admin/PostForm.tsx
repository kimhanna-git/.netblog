import { TextField, InputBase, Paper, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Typography, Box, Divider, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, NativeSelect } from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";




export default function PostForm() {
  
  const [formValue, setformValue] = React.useState({
    title: '',
    timestamp: '',
    authorId:'',
    text: '',    
    category: '',
  });
  
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    const value = target.value;
    setformValue({
      ...formValue,
      [target.name]: value
    });
  };
    
const handleSubmit = async() => {
  // store the states in the form data
  var datestr = (new Date()).toUTCString();
  var PostFormData = new FormData(); //currently empty
  PostFormData.append("title", formValue.title)
  PostFormData.append("text", formValue.text)
  PostFormData.append("category", formValue.category)
  PostFormData.append("authorId", '1')
  PostFormData.append("timestamp", datestr) // key-value pairs added 


 
  const config: AxiosRequestConfig = {
    method: "post",
    url: "api/posts",
    data: PostFormData,
    headers: { "Content-Type": "multipart/form-data" },
  };

// send post request and get response
  axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
  }, function (error) {
  // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
  axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
    return response;
  }, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
    return Promise.reject(error);
  });
  
}       
  
    return (
      <>
      <Paper sx={{
      
      p: 2,
      fontSize: '0.875rem',
      fontWeight: '700',
      position: 'absolute',
      top: '20%',
      left: '30%',
      zIndex: 'tooltip',
      width: '62.3%'
    }}>
                   
<form onSubmit={handleSubmit}>

  <Box>
    <TextField
      id="outlined-uncontrolled"
      label="Post Title"
      sx = {{width: '100%'}}
      type="title"
      name="title"
      onChange={handleChange}
      value={formValue.title}
    />
    
  </Box>
  <p/><p/>
  <Box>
    <TextField
        id="outlined-multiline-static"
        label="Post"
        multiline
        rows={21}
        sx = {{width: '100%',
        }}
        type="text"
        name="text"
        onChange={handleChange}
        value={formValue.text}

        />
  </Box>
  <p/>
  <Box sx = {{width: '100%'}}>
    <TextField
      id="outlined-uncontrolled"
      label="Category"
      sx = {{width: '20%'}}
      type="category"
      name="category"
      onChange={handleChange}
      value={formValue.category}
    />
    <Button type="submit" variant="contained" size="large"  sx={{left: "60%"}}>Submit</Button>
    <Button variant="contained" size="large"  sx={{left: "61%"}}>Delete</Button>
    
  </Box>


</form>          
  </Paper>
    </>
    

    )
  }

