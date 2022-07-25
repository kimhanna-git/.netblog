import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
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
      
      <Catalog posts={posts} addPost={addPost} />
      
    </>
  );
}

export default App;
