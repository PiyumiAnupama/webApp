import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {
    
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState();
  return (
    <AppBar position="sticky" sx={{background:("#23387E")}}>
        <Toolbar>
            <Typography variant='h4'>Hotel Blog</Typography>
            {isLoggedIn && (<Box display="flex" marginLeft={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
               
               LinkComponent={Link}
               to="/blogs"
                label="All Blogs"
              />
              <Tab
               
               LinkComponent={Link}
               to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
            </Tabs>
          </Box>
            )}

            <Box display="flex" marginLeft={"auto"}>
            {!isLoggedIn && (
            <>
              {" "}
                <Button 
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 , color:("white") }}
               >Login</Button>
                <Button 
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 , color:("white")}}
                >SignUp</Button>
                  </>
          )}
          {isLoggedIn && (
                <Button
                LinkComponent={Link} 
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 , color:("white")}}
                >Logout</Button>
                 )}
            </Box>
        </Toolbar>
    </AppBar>  );
};
export default Header