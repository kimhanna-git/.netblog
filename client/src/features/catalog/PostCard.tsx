import { Button, Card, CardActions, CardContent, CardMedia, ListItem, ListItemText, Typography } from "@mui/material";
import { Post } from "../../app/models/post";

interface Props {
    post: Post;
}

export default function PostCard({post}: Props) {
    return (
        <Card sx={{ width: 490, height: 510}}>
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
          {post.title}
          <CardActions>
      </CardActions>
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      
    </Card>
    )
}