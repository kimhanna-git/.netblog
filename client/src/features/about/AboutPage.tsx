import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
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
        <Typography variant='h4'>
            Hi, I am HANNA.
            <p/>I am interested in building the most scalable architecture in the world.
        </Typography>
        </Paper>
        </>
    )
}