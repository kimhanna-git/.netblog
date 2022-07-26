import { Paper } from "@mui/material";
import { useState, useEffect } from "react";
import { Post } from "../../app/models/post";
import PostList from "./PostList";




export default function Catalog() {
    const [posts, setProducts] = useState<Post[]>([]);
  
  useEffect(() => {
    fetch('https://localhost:7230/api/posts')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

 
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
      <PostList posts={posts} />
      </Paper>
        </>
            
            
       
        
    )
}
    
        
        
    
