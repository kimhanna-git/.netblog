import { TextField, InputBase, Paper, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Typography, Box, Divider, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, NativeSelect } from "@mui/material";
import axios, { AxiosRequestConfig } from "axios";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";

const PostForm = () =>  {
  const FormData = global.FormData;

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:7231/', // use with scheme
    timeout: 30000,
    
});
  const [formValue, setformValue] = React.useState({
    title: '',
    timestamp: '',
    authorId:'',
    text: '',    
    category: '',
  })
  const handleChange = (event: any) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  };  
    
const handleSubmit = async() => {
  // store the states in the form data
  var datestr = (new Date()).toUTCString();
  const PostFormData = new FormData();
  PostFormData.append("title", formValue.title)
  PostFormData.append("text", formValue.text)
  PostFormData.append("category", formValue.category)
  PostFormData.append("authorId", '1')
  PostFormData.append("timestamp", datestr)
  
  const config: AxiosRequestConfig = {
    method: "post",
    url: "/api/posts",
    data: PostFormData,
    headers: { "Content-Type": "multipart/form-data" },
    responseType: "json",
    transformRequest: (PostFormData) => {
        
        return PostFormData;
    },
    
    
};

// send post request and get response
const response = await axiosInstance.request(config);
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
      value={formValue.title}
      onChange={handleChange}
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
        value={formValue.text}
        onChange={handleChange}

        />
  </Box>
  <p/>
  <Box>
    <TextField
      id="outlined-uncontrolled"
      label="Category"
      sx = {{width: '20%'}}
      type="category"
      name="category"
      value={formValue.category}
      onChange={handleChange}
    />
    
  </Box>

  {/*<FormControl sx = {{width: '20%'}}>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  </InputLabel>
  <NativeSelect
    defaultValue={"dev"}
    id="category"
    sx = {{width: '100%'}}
    onChange={handleChange}
    inputProps={{
      name: 'Category',
      id: 'uncontrolled-native',
    }}
  >
    <option value={'dsa'}>DSA TRAINING</option>
    <option value={'dev'}>DEV JOURNAL</option>
  </NativeSelect>
  </FormControl> this code needs further research : sending select value thru axios*/}
  <Button type="submit" variant="contained" size="large" sx={{left: "70%"}}>Submit</Button>
</form>          
  </Paper>
    </>
    

    )
  };

  export default PostForm;