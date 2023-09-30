import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Typography, TextField, Container, Link, Button } from '@mui/material'
import { signIn } from '../services/userService';
import { useNavigate } from 'react-router';

function Login() {
    const googleText = "Google";
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#4285F4'];

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }

    const submit = async () => {
        console.log("login")
        const res = await signIn(data);
        console.log("data", data);
        localStorage.setItem("userDetails", res.data.id)
        console.log("res-->", res);
        navigate("/dashboard");

    }
    return (
        <Container maxWidth='sm' style={{ marginTop: '20px' }}>
            <Grid container>
                <Grid container sx={{
                    border: '1px solid #f3f3f3',
                    width: '400px', height: 'auto', boxShadow: "5px", alignItems: "center", padding: '20px', gap: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'

                }}>
                    <Grid item style={{ marginTop: '0px' }}>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {googleText.split('').map((letter, index) => (
                                <Typography key={index} variant="h2" color="" component='p' style={{ color: colors[index], fontSize: '25px' }}>
                                    {letter}
                                </Typography>
                            ))}
                        </div>

                        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem', textAlign: 'center' }}>Login</h1>
                        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem', textAlign: 'center' }}> Use Your Fundoo acoount</h1>
                    </Grid>
                    <Grid item container style={{ padding: '10px', marginBottom: "20px", rowGap: '20px' }}>
                        <TextField
                            id="email"
                            label="Email or phone"
                            variant="outlined"
                            fullWidth
                            value={data.email}
                            onChange={handleChange}
                        />
                        <TextField
                            id="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            value={data.password}
                            onChange={handleChange}
                        />                        
                        <p>Forgot Password</p>

                    </Grid>
                    <Grid item >
                        <Grid item xs={12} sm={9} sx={{ display: "flex", gap: 20 }}>
                            <Typography>
                                <Link href="/" color="primary">
                                    <span style={{ whiteSpace: "nowrap" }}>Create Account</span>
                                </Link>
                            </Typography>

                            <Button variant="contained" color="primary" onClick={submit} >
                                Login
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
