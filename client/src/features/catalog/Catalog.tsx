import { Paper } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Post } from "../../app/models/post";
import PostList from "./PostList";
import '../../app/layout/styles.css';



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
    
        
        
    
