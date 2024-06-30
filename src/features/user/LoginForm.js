// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import RowTable from "./RowTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
// import ButtonComp from "./ButtonComp";
import { TextField, Button, Typography, Container, Grid, Paper, FormControl } from "@mui/material";
import ButtonLogin from "./ButtonLogin";



const LoginForm = ({isLogin, textButton, loginFunc}) => {
    const [loginUser, setLoginUser] = useState ({})
    const Navigate = useNavigate(); 
    async function handleLogin (e) {
        e.preventDefault();
        try {
            const data = await loginFunc(loginUser);
      
            if (typeof data === 'object' && data !== null) {
              Navigate("/cars");
            } 
            else {
              alert("Invalid login credentials"); 
            }
          } catch (error) {
            console.error("Login error:", error);
            alert("your email or password is incorect"); 
          }
        }

  return (
    <>
    <FormControl onSubmit={handleLogin}>
      <div className="form">
            <br/>
            <br/>
            {!isLogin && 
            <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  required
                  label="userName"
                  InputLabelProps={{
                      shrink: true,
                  }}        
                  placeholder="enter your name"
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, userName: e.target.value })
                  
                  }
                />
              </Grid>}
             
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  required
                  label="Email"
                  InputLabelProps={{
                      shrink: true,
                  }}        
                  placeholder="enter email"
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, email: e.target.value })
                  }
                />
                <div></div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  required
                  label="password"
                  InputLabelProps={{
                      shrink: true,
                  }}        
                  placeholder="password"
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  
                  }
                />
              </Grid>
              </div>

            <ButtonLogin textButton={textButton} user={loginUser} loginFunc={loginFunc}/>
          </FormControl>
    </>
  );

}


export default LoginForm;