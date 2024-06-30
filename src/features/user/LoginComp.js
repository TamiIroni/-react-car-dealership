import { useState } from "react";
import LoginForm from "./LoginForm";
import { login, singIn } from "./UserApi";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



function LoginComp() {

    const [isLogin, setIsLogin] = useState(true)

    const handleChange = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="LOGIN"  />
                        <Tab label="SIGN IN"  />
                    </Tabs>
                </Box>
                {isLogin ? <LoginForm isLogin={isLogin} loginFunc={login} textButton={'login'} /> :
                <LoginForm isLogin={isLogin} loginFunc={singIn} textButton={'sing in'} />}
            </Box>
        </div>
    );
}

export default LoginComp;