import { TextField, Paper, Box, Button } from "@mui/material";
import { AxiosRequestConfig } from "axios";
import React, { ChangeEvent } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { TextChange } from "typescript";



export default function PostForm() {
  
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    var datestr = (new Date()).toUTCString();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("text", data.text);
    formData.append("category", data.category);
    formData.append("timestamp", datestr);
    formData.append("authorId", "1");
    const res = await axios("https://localhost:7230/api/posts", {
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data", "Accept": "multipart/form-data" },
        transformRequest: (formData) => {
        
          return formData;}}
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response);
            console.log("server responded");
          } else if (error.request) {
            console.log("network error");
          } else {
            console.log(error);
          }
        });
    
};
  
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
                   
<form onSubmit={handleSubmit(onSubmit)}>

  <Box>
    <TextField
      id="outlined-uncontrolled"
      label="Post Title"
      sx = {{width: '85%'}}
      type="text"
      {...register("title")}
    />
    <Button variant="contained" size="large"  sx={{top: "10%", left: "2%"}}>Delete</Button>
    
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
        {...register("text")}
        />
  </Box>
  <p/>
  <Box sx = {{width: '90%'}}>
    <TextField
      id="outlined-uncontrolled"
      label="Category"
      sx = {{width: '20%'}}
      type="text"
      {...register("category")}
    />
    <Button type="submit" variant="contained" size="large"  sx={{left: "80%"}}>Submit</Button>
  </Box>
</form>          
  </Paper>
    </>
    )
  }
