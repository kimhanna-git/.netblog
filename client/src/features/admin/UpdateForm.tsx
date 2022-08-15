import { TextField, Paper, Box, Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Post } from "../../app/models/post";
import TextEditor from "./TextEditor"


export default function UpdateForm() {
  
  const { register, handleSubmit } = useForm();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://localhost:7230/api/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
  }, [])
  
  const intialValues = {
    title: 'bill',
    category: 'luo',
    timestamp: 'bluebill1049@hotmail.com',
    text: -1,
  };



  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("text", data.text);
    const response = await axios("https://localhost:7230/api/posts", {
        method: "PUT",
        data: formData,
        headers: { "Content-Type": "multipart/form-data", "Accept": "multipart/form-data" },
        transformRequest: (formData) => {
        
          return formData;}}
        )
        .then((response) => {
          console.log(response);
          window.location.href = 'http://localhost:7231/'
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
