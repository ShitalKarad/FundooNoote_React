import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, TextField, Container,Link,Button } from '@mui/material'


function Login() {
    const googleText = "Google";
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#4285F4'];
    return (
        <Container maxWidth='sm' style={{ marginTop: '20px' }}>
            <Grid container>
                <Grid container sx={{
                    border: '1px solid #f3f3f3',
                    width: '400px', height: 'auto', boxShadow: "5px", alignItems: "center", padding: '20px', gap: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'

                }}>
                    <Grid item style={{ marginTop: '0px' }}>

                        <div style={{ display: 'flex' , justifyContent:'center' }}>
                            {googleText.split('').map((letter, index) => (
                                <Typography key={index} variant="h2" color="" component='p' style={{ color: colors[index], fontSize: '25px' }}>
                                    {letter}
                                </Typography>
                            ))}
                        </div>

                        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem', textAlign: 'center' }}>Login</h1>
                        <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem', textAlign: 'center' }}> Use Your Fundoo acoount</h1>
                    </Grid>
                    <Grid item container style={{ padding: '10px', marginBottom: "20px" , rowGap:'20px'}}>
                        <TextField fullWidth label="Email or phone" id="fullWidth" />
                        <TextField fullWidth label="Password" id="fullWidth" />
                                <p>Forgot Password</p>

                    </Grid>
                    <Grid item >
                        <Grid item xs={12} sm={9} sx={{ display: "flex", gap: 20 }}>
                        <Typography>
                                <Link href="#" color="primary">
                                    <span style={{ whiteSpace: "nowrap" }}>Sign in instead</span>
                                </Link>
                            </Typography>

                            <Button variant="contained" color="primary" >
                                Next
                            </Button>
                        </Grid>
                        </Grid>
                            
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
