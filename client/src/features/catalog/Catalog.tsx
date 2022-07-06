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
    <Box sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : 'grey.600',
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.50'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 2,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          position: 'absolute',
          top: 200,
          left: '40%',
          zIndex: 'tooltip',
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
      </Box>
        </>
        
        
    )

}