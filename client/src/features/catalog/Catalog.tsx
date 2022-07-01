import { Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment } from "react"
import { Post } from "../../app/models/post";
interface Props {
    posts : Post[];
    addPost: () => void;
}

export default function Catalog({posts, addPost}: Props) { //destructuring
    return( // <></> is equivalent to <Fragment></Fragment>
       <>      
        

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText primary="Top Posts" />
            </ListItemButton>
          </ListItem>

        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Explore DSA" />
              </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>   
              </ListItemIcon>
              <ListItemText primary="CS Knowledge" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Interview Tips" />
            </ListItemButton>
          </ListItem>
        
        </List>
      </nav>
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

        </>
        
        
    )

}