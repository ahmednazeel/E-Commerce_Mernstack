import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import './login.css'
const Login = () => {
   const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
   }
  return (
    <div className="login-page">
      <div className="login-content d-flex align-items-center">
        <div className="login-form">
        <Box
            sx={{
              boxShadow:"1px 1px 35px skyblue",
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding:"30px",
              borderRadius:"20px"
            }}
          >
            
          
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography className="text_input" component="h1" variant="h5">
            <span className="fs_40 fw-bold fontApp">Sign in</span> 
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1}}>
              <TextField
                // className=""
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onSubmit={e=>console.log(e.target.value)}
                />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                id="remember"
                control={<Checkbox  value="remember" color="primary" />}
                label="Remember me"
                sx={{fontSize:"20px"}}
/>
              <Button className="fontApp"
                type="submit"
                fullWidth

                variant="contained"
                sx={{ fontSize:"16px", mt: 3, mb: 2 }}
                onClick={(e)=>{e.preventDefault();console.log(e);}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </div>
        
        <div className="login-img overlay ">
         <img src="/IMG/hero_loginPage.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
