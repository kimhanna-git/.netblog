import { useEffect, useState } from "react";
import { Post } from "../models/post";


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
    <div className='app'>
      <h1 style={{color: 'red'}}>HANNA'S BLOG</h1>
      <ul>
        
        {posts.map(item => (
          <li key={item.id}>{item.title} - {item.text}</li>

        ))}
      </ul>
      <button onClick={addPost}>New Post</button>
    </div>
  );
}

export default App;
