import { TextField, Button, InputBase, ListItemText, MenuItem, MenuList, Paper, Typography, ListItem, Box, AppBar, Fade, List, Menu, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './styles.css'

  const titletheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Russo One',
        textTransform: 'none',
        fontSize: 40,
      },
    },
    
  }  
  );


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '15ch',
        },
      },
    },
  }));  

  const menutheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Russo One',
        textTransform: 'none',
        fontSize: 25,
        
      },
      
    },
  });
  
  const Links = [
    {title: 'about', path:'/about'},
    {title: 'dsa training', path:'/dsa'},
    {title: 'dev journal', path:'/dev'},
  ]

export default function Header() {
    return (
        <>
        
        <ThemeProvider theme={titletheme}>
        <AppBar position="fixed" color="secondary" sx={{display: 'flex', height: '65px'}}>
        <Toolbar disableGutters sx={{height: '65px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
 
        <ListItem>
        <Button disableRipple disableElevation color="inherit" style={{backgroundColor: 'transparent'}}>
          <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          HANNA'S BLOG      
          </Link>
        </Button>
        </ListItem>

        </Toolbar>
        </AppBar>
        <Toolbar />
        </ThemeProvider>














        
        <ThemeProvider theme={menutheme}>
          
        <Box sx={{ width: 330,
        position: 'absolute',
        top: '23%',
        left: '6%',}}>
      <MenuList dense>
        {Links.map(({title, path}) => (
          <MenuItem>
          <ListItem 
            component={NavLink}
            to={path}
            key={path}
            sx={{color: 'inherit'}}
            >
              {title.toUpperCase()}
          </ListItem>
        </MenuItem>
        ))}
        </MenuList>
        </Box>
        <Box sx={{ width: 330,
        position: 'absolute',
        top: '43%',
        left: '6%', }}>

      <MenuList dense>
        <MenuItem>
        <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </MenuItem>
        </MenuList>
    </Box>
        
        </ThemeProvider>
        
        </>
    )
}