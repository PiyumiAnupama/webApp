import React from 'react';
import {
    AppBar, Box, Button, Toolbar, Typography,
   
  } from "@mui/material";

export const Header = () => {
  return (
    <AppBar sx={{background:("#23387E")}}>
        <Toolbar>
            <Typography variant='h4'>Hotel Blog</Typography>
            <Box display="flex" marginLeft={"auto"}>
                <Button 
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 , color:("white") }}
               >Login</Button>
                <Button 
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 , color:("white")}}
                >SignUp</Button>
            </Box>
        </Toolbar>
    </AppBar>  )
}
export default Header