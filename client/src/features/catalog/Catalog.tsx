import { Box, createTheme, Paper, ThemeProvider } from "@mui/material";
import axios from "axios";
import React from 'react';
import { useState, useEffect } from "react";
import { Post } from "../../app/models/post";
import PostList from "./PostList";



export default function Catalog() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios.get('https://localhost:7230/api/posts')
          .then(response => setPosts(response.data))
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
  }, [])

    return (
        
        <>
        
          
      
      <PostList posts={posts} />
      
      
        </>
            
            
       
        
    )
}
    
        
        
    
