import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../app/models/post";
import ReactHtmlParser from 'react-html-parser';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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

    if (loading) return <h3>...<p/>Loading....</h3>

    if (!post) return <h3>...<p/>Post not found</h3>

    

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
          width: '62.3%'

        }}>
            <Grid container spacing={1} width='100%'>
            
            <Grid>
                <Grid item xs={15}>
                    <TableContainer>
                    <div className="table" style={{width:'100%' }}>
                        <Table sx={{width: '100%'}}>
                            <TableBody>
                                <TableRow>
                                    
                                    <TableCell ><Typography sx={{fontSize: 30}} fontWeight='bold'>{post.title}</Typography></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{width: '100%'}}><Typography sx={{fontSize: 20}}>                                 
                                    <React.Fragment> 
                                    <div style={{ whiteSpace: 'pre-wrap', width:'100%' }} >
                                    
                                        {ReactHtmlParser(post.text)}    
                                    </div>
                                    </React.Fragment>
                                    </Typography></TableCell>
                                </TableRow> 
                        
                            </TableBody>
                        </Table></div>
                    </TableContainer>
                </Grid>
            </Grid>

        </Grid>
      
      </Paper>
        


        </>
        
    )
    }
