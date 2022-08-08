import { Button, Card, CardActions, CardContent, CardMedia, ListItem, ListItemText, MenuItem, Stack, TableRow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../app/models/post";
interface Props {
    post: Post;
}

export default function PostCard({post}: Props) {
    return (
        <Card sx={{ width: 490, height: 316}} >
      <CardContent>
        <Typography component={Link} to={`/posts/${post.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Typography gutterBottom variant="h5" fontWeight="bold" component="div"
        >{post.title}{/* get the title of the post */}
        </Typography>
        </Typography>
        
        <Typography variant="h6" color="text.secondary">
        <div style={{ whiteSpace: 'pre-wrap' }}>
          {post.text}{/* get the text body of the post */}
          </div>
        </Typography>
              
      </CardContent>
      
    </Card>
    )
}