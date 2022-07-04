import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { Fragment } from "react"
import { Post } from "../../app/models/post";
interface Props {
    posts : Post[];
    addPost: () => void;
}

export default function Catalog({posts, addPost}: Props) { //destructuring
    return( // <></> is equivalent to <Fragment></Fragment>
       <> 
      <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', }}>
      <Stack spacing={0.5}>
        <ListItem>Find Learning Materials</ListItem>
        <ListItemButton>.NET</ListItemButton>
        <ListItemButton>JAVA SPRING</ListItemButton>
        <ListItemButton>FLUTTER</ListItemButton>
      </Stack>     
      </Box>  
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
        </>
        
        
    )

}