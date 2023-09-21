import React from 'react'
import Grid from '@mui/material/Grid'
import { Typography, TextField, Container, FormControlLabel, Checkbox,Button,Link,Paper } from '@mui/material'

import signUpImg from "../assets/unnamed.png"

function SignUp() {
    const googleText = "Google";
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#4285F4'];
    return (
        <Container maxWidth='sm' style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <Grid container sx={{
                border: { xs: '1px solid #f3f3f3', sm: '1px solid red', md: '1px solid blue' },
                width: '750px', height: 'auto', boxShadow: "5px", alignItems: "center", padding: '20px', gap: '20px'

            }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between', width: '750px', height: 'auto', }}>

                    <Grid>
                        <Grid item style={{ marginTop: '0px' }}>

                            <div style={{ display: 'flex' }}>
                                {googleText.split('').map((letter, index) => (
                                    <Typography key={index} variant="h2" color="" component='p' style={{ color: colors[index], fontSize: '25px' }}>
                                        {letter}
                                    </Typography>
                                ))}
                            </div>

                            <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem' }}>Create your Google Account</h1>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="First Name*" variant="outlined" fullWidth sx={{ fontSize: '0.8rem', padding: '0px' }} />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Last Name*" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item style={{ width: '100%', marginTop: '20px' }}>
                            < TextField fullWidth label="Username*" id="fullWidth" />
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0px' }}>
                                <h1 style={{ fontSize: '0.7rem' }}>You can use letters, numbers & periods</h1>
                                <p style={{ marginTop: '0px' }} >Use my current email instead</p>
                            </div>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Password*" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Confirm*" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <div style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                <h1 style={{ fontSize: '0.8rem', margin: '0px', letterSpacing: '0px' }}>Use 8 or more characters with a mix of letters, numbers & symbols</h1>

                            </div>
                        </Grid>
                        <Grid item style={{ marginLeft: '0px' ,marginTop:'20px'}}>
                            <FormControlLabel required control={<Checkbox />} label="Show Password" />
                        </Grid>
                        <Grid item xs={12} sm={9} sx={{ display: "flex", gap: 29 }}>
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
                    <Grid item xs={12} sm={6}>
                         <Paper elevation={0} className="right-side"> 
                   
                        <img
                            src={signUpImg}
                            alt="Sign Up"
                            className="google-drive-image"
                            style={{ width: '300px', height: '250px', marginRight: "20px" }}
                        />
                     </Paper> 
                    </Grid>

                </Grid>


            </Grid>

        </Container>
    )
}

export default SignUp
