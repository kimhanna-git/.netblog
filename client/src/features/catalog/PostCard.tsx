import { Button, Card, CardActions, CardContent, CardMedia, ListItem, ListItemText, Typography } from "@mui/material";
import { Post } from "../../app/models/post";

interface Props {
    post: Post;
}

export default function PostCard({post}: Props) {
    return (
        <Card sx={{ width: 500, height: 510}}>
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
          Lizard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica  are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica izards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica  888
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}