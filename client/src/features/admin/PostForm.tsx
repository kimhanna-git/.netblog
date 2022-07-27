import { TextField, InputBase, Paper, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Typography, Box, Divider, Button } from "@mui/material";

function textControl (element: { selectionStart: any; value: string; selectionEnd: any; }, event: { keyCode: number; which: number; preventDefault: () => void; })
{
    if(event.keyCode==9 || event.which==9)
    {
        event.preventDefault();
        var s = element.selectionStart;
        element.value = element.value.substring(0,element.selectionStart) + "\t" + element.value.substring(element.selectionEnd);
        element.selectionEnd = s+1; 
    }
}

export default function PostForm() {
    
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
      label="Title"
      sx = {{width: '100%'}}
    />
  </Box>
  <p/><p/>
  <Box>
    <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={25}
          sx = {{width: '100%',
          onkeydown: "textControl(this,event)"
        }}
        />
  </Box>
  <p/>
  <Button variant="contained" size="large" sx={{left: "90%"}}>Submit</Button>
</form>  
        
  </Paper>
    


    </>
    



    )}