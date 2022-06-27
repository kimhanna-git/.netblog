import { useEffect, useState } from "react";


function App() {
  const [posts, setPosts] = useState([
    {title: 'post1', text: 'hi'},
    {title: 'post2', text: 'hello'},
  ]);

  useEffect(() => {
    fetch('https://localhost:7230/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  function addPost(){
    setPosts(prevState => [...prevState, {title: 'post' + (prevState.length + 1), text: 'timestamp '+ (prevState.length*10 +10)}])
  }
  return (
    <div className='app'>
      <h1 style={{color: 'red'}}>HANNA'S BLOG</h1>
      <ul>
        
        {posts.map(item => (
          <li key={item.title}>{item.title} - {item.text}</li>

        ))}
      </ul>
      <button onClick={addPost}>New Post</button>
    </div>
  );
}

export default App;
