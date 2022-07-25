import { Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../app/models/post";

export default function PostDetails() {
    const {id} = useParams<{id: string}>();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://localhost:7230/api/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [id])

    if (loading) return <h3>Loading....</h3>

    if (!post) return <h3>Post not found</h3>

    return (
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
            <Grid container spacing={1}>
            
            <Grid>
                <Grid item xs={15}>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    
                                    <TableCell><Typography sx={{fontSize: 25}} fontWeight='bold'>{post.title}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><Typography sx={{fontSize: 20}}>{post.text}</Typography></TableCell>
                                </TableRow>
                                
                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        </Grid>
      
      </Paper>
        


        </>
        
    )
    }
