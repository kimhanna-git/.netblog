import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { Fragment } from "react"
import { Post } from "../../app/models/post";
interface Props {
    posts : Post[];
    addPost: () => void;
}

export default function Catalog({posts, addPost}: Props) { //destructuring
    return( // <></> is equivalent to <Fragment></Fragment>
       <> 
    <Paper sx={{
          
          p: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 200,
          left: '27%',
          zIndex: 'tooltip',
          width: '60%'
        }}>
    <List>
        {posts.map(post  => (
          <ListItem key={post.id}>
            <ListItemText>
              {post.title} - {post.text}  
            </ListItemText>
          </ListItem>
        ))}
        </List>
      <button onClick={addPost}>New Post</button>
      </Paper>
        </>
        
        
    )

}