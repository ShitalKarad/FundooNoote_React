import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Typography, TextField, Container, FormControlLabel, Checkbox, Button, Link, Paper } from '@mui/material'

import signUpImg from "../assets/unnamed.png"

function SignUp() {

    const [error, setError] = useState({
        isfirstNameTrue: false,

        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
    });

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
    });

    const [validationErrors, setValidationErrors] = useState({});

    const firstNameRegex = /^[A-Za-z]+$/;
    const lastNameRegex = /^[A-Za-z]+$/;
    const usernameRegex = /^[a-zA-Z0-9.]+$/;

    const validateFirstName = () => {
        if (!firstNameRegex.test(userDetails.firstName)) {
            setValidationErrors((prevState) => ({
                ...prevState,
                firstName: "Invalid first name format",
            }));
        } else {
            setValidationErrors((prevState) => ({
                ...prevState,
                firstName: "",
            }));
        }
    };
    console.log();

    const validateLastName = () => {
        if (!lastNameRegex.test(userDetails.lastName)) {
            setValidationErrors((prevState) => ({
                ...prevState,
                lastName: "Invalid last name format",
            }));
        } else {
            setValidationErrors((prevState) => ({
                ...prevState,
                lastName: "",
            }));
        }
    };

    const validateUsername = () => {
        if (!usernameRegex.test(userDetails.username)) {
            setValidationErrors((prevState) => ({
                ...prevState,
                username: "Invalid username format",
            }));
        } else {
            setValidationErrors((prevState) => ({
                ...prevState,
                username: "",
            }));
        }
    };

    const handleInputChange = (e, field) => {
        const { value } = e.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            [field]: value,
        }));

        // Call validation function based on the field being updated
        if (field === "firstName") {
            validateFirstName();
        } else if (field === "lastName") {
            validateLastName();
        } else if (field === "username") {
            validateUsername();
        }
    };

    const googleText = "Google";
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#4285F4'];
    return (
        <Container maxWidth='sm' style={{
            marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', "@media (max-width: 500px)": {
                border: "none",
                borderRadius: 0,

            },
        }}>
            <Grid container sx={{

                border: "1px solid black",

                width: '750px', height: 'auto', boxShadow: "5px", alignItems: "center", padding: '20px', gap: '20px'

            }}>
                <Grid sx={{ display: 'flex', justifyContent: 'space-between', width: '750px', height: 'auto', rowGap: '20px' }}>

                    <Grid style={{
                        "@media (max-width: 500px)": {
                            border: "none",
                            borderRadius: 0,

                        },
                    }}>
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
                                <TextField
                                    fullWidth
                                    label="First Name*"
                                    id="fullWidth"
                                    error={!!validationErrors.firstName} // Set error to true if there's a validation error
                                    helperText={validationErrors.firstName || ' '} // Display the error message if it exists
                                    value={userDetails.firstName}
                                    onChange={(e) => handleInputChange(e, "firstName")}
                                />          
                                   </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name*"
                                    id="fullWidth"
                                    error={!!validationErrors.lastName} // Set error to true if there's a validation error
                                    helperText={validationErrors.lastName || ' '} // Display the error message if it exists
                                    value={userDetails.lastName}
                                    onChange={(e) => handleInputChange(e, "lastName")}
                                />                                  </Grid>
                        </Grid>
                        <Grid item style={{ width: '100%', marginTop: '20px' }}>
                            <TextField
                                fullWidth
                                label="Username*"
                                id="fullWidth"
                                error={!!validationErrors.username} // Set error to true if there's a validation error
                                helperText={validationErrors.username || ' '} // Display the error message if it exists
                                value={userDetails.username}
                                onChange={(e) => handleInputChange(e, "username")}
                            />                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '0px' }}>
                                <h1 style={{ fontSize: '0.7rem' }}>You can use letters, numbers & periods</h1>
                                <p style={{ marginTop: '0px', }} >Use my current email instead</p>
                            </div>
                        </Grid>
                        <Grid item container spacing={2} style={{ marginTop: '10px' }}>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Password*" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="outlined-basic" label="Confirm*" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item >
                            <div style={{ alignItems: 'flex-start', marginLeft: '0px' }}>
                                <h1 style={{ fontSize: '0.8rem', marginTop: '20px', letterSpacing: '0px' }}>Use 8 or more characters with a mix of letters, numbers & symbols</h1>

                            </div>
                        </Grid>
                        <Grid item style={{ marginLeft: '0px', marginTop: '20px' }}>
                            <FormControlLabel required control={<Checkbox />} label="Show Password" />
                        </Grid>
                        <Grid item xs={12} sm={9} sx={{ display: "flex", gap: 29, marginTop: '30px' }}>
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
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Paper elevation={0} className="right-side" sx={{
                            "@media (max-width: 600px)": {
                                display: "none",
                            },
                        }}>

                            <img
                                src={signUpImg}
                                alt="Sign Up"
                                className="google-drive-image"
                                style={{ width: '200px', height: '200px', marginRight: '0px' }}
                            />
                        </Paper>
                    </Grid>

                </Grid>


            </Grid>

        </Container>
    )
}

export default SignUp
