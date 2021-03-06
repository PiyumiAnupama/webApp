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
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";



const Header = () => {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [value, setValue] = useState();
    return (
      <AppBar
        position="sticky"
        sx={{
          background:
            "#23387E",
        }}
      >
        <Toolbar>
          <Typography  variant="h4">
            BookWorm Blog
          </Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft={"auto"} marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab
                  
                  LinkComponent={Link}
                  to="/blogs"
                  label="Home"
                />
                <Tab
                  
                  LinkComponent={Link}
                  to="/myBlogs"
                  label="My Review"
                />
                <Tab
                 
                  LinkComponent={Link}
                  to="/blogs/add"
                  label="Add Review"
                />
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                {" "}
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10, color:"white" }}
                  
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10, color:"white" }}
                  
                >
                  Signup
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                onClick={() => dispath(authActions.logout())}
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10, color:"white" }}
                
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Header;
