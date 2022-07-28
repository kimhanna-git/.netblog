import { TextField, Button, InputBase, ListItemText, MenuItem, MenuList, Paper, Typography, ListItem } from "@mui/material";
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';
import { Link, NavLink } from "react-router-dom";
import './styles.css'

  const titletheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Noto Sans',
        textTransform: 'none',
        fontSize: 80,
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
        fontFamily: 'Noto Sans',
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
        <Typography variant='h2' align= 'center'>
        <Button component={Link} to="/" color="inherit">HANNA'S BLOG</Button>
        </Typography>
        </ThemeProvider>
        
        <ThemeProvider theme={menutheme}>
          
        <Paper sx={{ width: 370,
        position: 'absolute',
        top: '20%',
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
        </Paper>
        <Paper sx={{ width: 370,
        position: 'absolute',
        top: '40%',
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
    </Paper>
        
        </ThemeProvider>
        
        </>
    )
}