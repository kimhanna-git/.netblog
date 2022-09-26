import { ThemeProvider, Box, Button, Card, CardActions, CardContent, CardMedia, createTheme, ListItem, ListItemText, MenuItem, Stack, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../app/models/post";
import React from 'react';

interface Props {
    post: Post;
}

const titletheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Russo One',
      textTransform: 'none',
  
    },
  },
  
}  
);
const texttheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Basic',
      textTransform: 'none',
    },
  },});


export default function PostCard({post}: Props) {
  let d = document.createElement('div');
  d.innerHTML = post.text
  
    return (
        <Card variant="outlined" sx={{ width: 500, height: 225}} >
      <CardContent>
      <ThemeProvider theme={titletheme}>
        <Typography align= 'center' component={Link} to={`/posts/${post.id}` } style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Typography gutterBottom variant="h5" component="div"
        >{post.title}{/* get the title of the post */}
        </Typography>
        </Typography></ThemeProvider>
        <div/>
        <ThemeProvider theme={texttheme}>
        <Typography variant="h5" color="text.secondary">
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {d.innerText}{/* get the text body of the post */}
          </div>
        </Typography></ThemeProvider>
      </CardContent>
      
    </Card>
    )
}