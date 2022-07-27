import { TextField, InputBase, Paper, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Typography, Box, Divider, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, NativeSelect } from "@mui/material";
import React from "react";


export default function PostForm() {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setCategory(event.target.value);
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
                   
<form>
  <Box>
    <TextField
      id="outlined-uncontrolled"
      label="Post Title"
      sx = {{width: '100%'}}
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
        />
  </Box>
  <p/>
  <FormControl sx = {{width: '20%'}}>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Category
  </InputLabel>
  <NativeSelect
    inputProps={{
      name: 'Category',
      id: 'uncontrolled-native',
    }}
  >
    <option value={"dsa"}>DSA TRAINING</option>
    <option value={"dev"}>DEV JOURNAL</option>
  </NativeSelect>
</FormControl>
  <Button variant="contained" size="large" sx={{left: "70%"}}>Submit</Button>
</form>          
  </Paper>
    </>

    )}