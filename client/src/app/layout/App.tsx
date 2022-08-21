import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import PostForm from "../../features/admin/PostForm";
import UpdateForm from "../../features/admin/UpdateForm";
import Catalog from "../../features/catalog/Catalog";
import PostDetails from "../../features/catalog/PostDetails";
import HomePage from "../../features/home/HomePage";
import { Post } from "../models/post";
import Header from "./Header";


function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  let dateTime = new Date();

  useEffect(() => {
    fetch('https://localhost:7230/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  function addPost(){
    setPosts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        title : 'post' + (prevState.length + 1),
        authorId: 3,
        text: 'here it is text', 
        timestamp: dateTime,
        upvote: (prevState.length*10 + 10),
        report: (prevState.length*10 + 1), 
        infovote: (prevState.length*10)}])
  }
  
  return (
    <>
    
      <Header />
      <Box sx={{
          
          p: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: '20%',
          left: '27%',
          zIndex: 'tooltip',
          width: '65%',
        }}>
      <CssBaseline>
      <Container>
        <Route exact path='/' component={Catalog}/>
        <Route exact path='/posts/:id' component={PostDetails}/> {/* link to individual posts */}
        <Route path='/about' component={AboutPage}/>
        <Route path='/writepost' component={PostForm}/> 
        <Route exact path='/posts/:id/update' component={UpdateForm}/> 
      </Container>
      </CssBaseline>
      </Box>
      
    </>
  );
}

export default App;
