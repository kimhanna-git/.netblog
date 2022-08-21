import { Box, createTheme, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, ThemeProvider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../app/models/post";
import ReactHtmlParser from 'react-html-parser';

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

    if (loading) return <h3></h3>

    if (!post) return <h3></h3>

    const titletheme = createTheme({
        typography: {
          allVariants: {
            fontFamily: 'Russo One',
            textTransform: 'none',
          },
        },
        
      }  
      );
    
    const texttheme = createTheme({
        typography: {
          allVariants: {
            fontFamily: 'Basic',
            textTransform: 'none',
          },
        },
        
      }  
      );

    return (
        <>
         
            <ThemeProvider theme={titletheme}>
            <Grid container spacing={1} width='95.5%'>
            
            <Grid>
                <Grid item xs={15}>
                    <TableContainer>
                    <div className="table" style={{width:'100%' }}>
                        <Table>
                            <TableBody>
                                <TableRow>
                                <ThemeProvider theme={titletheme}>
                                    <TableCell><Typography sx={{fontSize: 30}} fontWeight='bold'>{post.title}
                                    </Typography></TableCell></ThemeProvider>
                                </TableRow>
                                <TableRow><ThemeProvider theme={texttheme}>
                                    <TableCell><Typography sx={{fontSize: 22}}>
                                    <React.Fragment> 
                                                        
                                    <div style={{ whiteSpace: 'pre-wrap' }} >
                                        {ReactHtmlParser(post.text)} 
                                    </div>
                                    </React.Fragment>
                                    </Typography></TableCell></ThemeProvider>
                                </TableRow> 
                        
                            </TableBody>
                        </Table></div>
                    </TableContainer>
                </Grid>
            </Grid>

        </Grid>
        </ThemeProvider>
     


        </>
        
    )
    }