import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Typography } from "@mui/material";
import { Fragment } from "react"
import { Post } from "../../app/models/post";
import PostList from "./PostList";
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
          top: '20%',
          left: '30%',
          zIndex: 'tooltip',
          width: '61.5%'
        }}>
      <PostList posts={posts}/>
      <button onClick={addPost}>New Post</button>
      </Paper>
        </>
        
        
    )

}