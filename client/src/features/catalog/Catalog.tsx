import { Fragment } from "react"
import { Post } from "../../app/models/post";
interface Props {
    posts : Post[];
    addPost: () => void;
}

export default function Catalog({posts, addPost}: Props) { //destructuring
    return( // <></> is equivalent to <Fragment></Fragment>
       <>      
        <ul>
        
        {posts.map(post  => (
          <li key={post.id}>{post.title} - {post.text}</li>

        ))}
        </ul>
      <button onClick={addPost}>New Post</button>
            
        
        </>
        
        
    )

}