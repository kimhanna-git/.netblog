import { TextField, Button, InputBase, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { ThemeProvider, createTheme, styled, alpha } from '@mui/material/styles';
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
  

export default function Header() {
    return (
        <>
        
        <ThemeProvider theme={titletheme}>
        <Typography variant='h2' align= 'center'>
        <Button color="inherit">HANNA'S BLOG</Button>
        </Typography>
        </ThemeProvider>
        
        <ThemeProvider theme={menutheme}>
          
        <Paper sx={{ width: 370,
        position: 'absolute',
        top: '20%',
        left: '6%',}}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>ABOUT</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>DSA TRAINING</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>DEV JOURNAL</ListItemText>
        </MenuItem>
        </MenuList>
        </Paper>
        <Paper sx={{ width: 370,
        position: 'absolute',
        top: '38%',
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