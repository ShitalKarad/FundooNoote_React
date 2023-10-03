import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { Typography, TextField, Container, FormControlLabel, Checkbox, Button, Link, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Login from './Login'
import signUpImg from "../assets/unnamed.png"
import { signUp } from '../services/userService'

function SignUp() {

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        service: "advance"
        // showPassword: false,
    });


    const [validationErrors, setValidationErrors] = useState({});

    const firstNameRegex = /^[A-Za-z]+$/;
    const lastNameRegex = /^[A-Za-z]+$/;
    const usernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

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


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


    const validatePassword = () => {
        if (!passwordRegex.test(userDetails.password)) {
            setValidationErrors((prevState) => ({
                ...prevState,
                password: "Password  criteria: at least 8 characters, one uppercase letter, one lowercase letter, and one numeric digit.",
            }));
        } else {
            setValidationErrors((prevState) => ({
                ...prevState,
                password: "",
            }));
        }
    };

    const validateConfirmPassword = () => {
        if (userDetails.password === userDetails.confirmPassword) {
            setValidationErrors((prevState) => ({
                ...prevState,
                confirmPassword: "Passwords do not match.",
            }));
        } else {
            setValidationErrors((prevState) => ({
                ...prevState,
                confirmPassword: "",
            }));
        }
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            password: value,
        }));
        validatePassword(); // Call password validation function
    };

    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setUserDetails((prevUserDetails) => ({
            ...prevUserDetails,
            confirmPassword: value,
        }));
        validateConfirmPassword(); // Call confirm password validation function
    };

    const navigate = useNavigate();

    const handleNextButtonClick = async () => {
        // Remove the password from local storage
        if (
            !validationErrors.firstName &&
            !validationErrors.lastName &&
            !validationErrors.username &&
            !validationErrors.password &&
            !validationErrors.confirmPassword &&
            userDetails.password === userDetails.confirmPassword // Check if passwords match
        ) {
            console.log("user", userDetails)
            let res = await signUp(userDetails);
            console.log(res);
            navigate('/Login');
        } else {
            // Handle validation errors or display a message to the user
            console.error('Validation errors or passwords do not match. Please correct them before proceeding.');
        }
    };

    const [showPassword, setShowPassword] = useState();
    const handleShowPasswordChange = (e) => {
        setShowPassword(e.target.checked);
    };

    const googleText = "Google";
    const colors = ['#4285F4', '#0F9D58', '#F4B400', '#DB4437', '#4285F4'];
    return (
        <Grid container sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center', width: '100%' }}>

            <Paper elevation={2} >

                <Grid xs={12} sm={9} sx={{ width: '70%', height: 'auto', display: 'flex', paddingRight:'0px' }}>

                    <Grid item
                        lg={8} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'space-between',
                            padding: 2,
                            '@media (max-width: 600px)': {
                                border: 'none',
                                borderRadius: 0,
                                padding: '20px',

                            },
                        }} >

                        <Grid item style={{ marginTop: '0px', }}>
                            <div style={{ display: 'flex' }}>
                                {googleText.split('').map((letter, index) => (
                                    <Typography key={index} variant="h2" color="" component='p' style={{ color: colors[index], fontSize: '25px' }}>
                                        {letter}
                                    </Typography>
                                ))}
                            </div>

                            <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.0rem', }}>Create your Google Account</h1>
                        </Grid>
                        <Grid item container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name*"
                                    id="firstName"
                                    error={!!validationErrors.firstName}
                                    helperText={validationErrors.firstName || ' '}
                                    value={userDetails.firstName}
                                    onChange={(e) => handleInputChange(e, "firstName")}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <TextField
                                    fullWidth
                                    label="Last Name*"
                                    id="lastName"
                                    error={!!validationErrors.lastName} // Set error to true if there's a validation error
                                    helperText={validationErrors.lastName || ' '} // Display the error message if it exists
                                    value={userDetails.lastName}
                                    onChange={(e) => handleInputChange(e, "lastName")}
                                />

                            </Grid>
                        </Grid>
                        <Grid item style={{ width: '100%', paddingBottom: '0px' }}>
                            <TextField
                                fullWidth
                                label="email"
                                id="email"
                                error={!!validationErrors.username}
                                helperText={validationErrors.username || ' '}
                                value={userDetails.username}
                                onChange={(e) => handleInputChange(e, "email")}
                            />
                            {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '0px' }}> */}
                            <h1 style={{ fontSize: '0.7rem', marginTop: '0px' }}>You can use letters, numbers & periods</h1>
                            <p style={{ marginTop: '20px', }} >Use my current email instead</p>
                            {/* </div> */}
                        </Grid>
                        <Grid item container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="password"
                                    label="Password*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={userDetails.password}
                                    onChange={handlePasswordChange}
                                    error={!!validationErrors.password}
                                    helperText={validationErrors.password || ' '}
                                    sx={{ fontSize: '0.8rem' }}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="confirmPassword"
                                    label="Confirm Password*"
                                    variant="outlined"
                                    type={showPassword ? 'text' : 'password'}
                                    value={userDetails.confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    error={!!validationErrors.confirmPassword}
                                    helperText={validationErrors.confirmPassword || ' '}
                                    sx={{ fontSize: '0.8rem', padding: '0px' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginBottom: '20px' }} >
                            {/* <div style={{ alignItems: 'flex-start', marginLeft: '0px' }}> */}
                            <h1 style={{ fontSize: '0.8rem', letterSpacing: '0px', marginTop: '0px' }}>Use 8 or more characters with a mix of letters, numbers & symbols</h1>

                            {/* </div> */}
                        </Grid>
                        <Grid item >
                            <Checkbox
                                id="showPassword"
                                checked={showPassword}
                                onChange={handleShowPasswordChange} // Handle checkbox change
                            />
                            <label htmlFor="showPassword">Show Password</label>
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{ display: "flex", gap: 29, marginTop: '30px' }}>
                            <Typography>
                                <Link href="/login" color="primary">
                                    <span style={{ whiteSpace: "nowrap" }}>Sign in instead</span>
                                </Link>
                            </Typography>

                            <Button variant="contained" color="primary" onClick={handleNextButtonClick} >
                                Next
                            </Button>
                        </Grid>
                    </Grid>



                    <Grid xs={12} sm={4}  lg={6} sx={{marginRight:'0px'}}>
                        <Grid item
                            xs={12}
                            sm={6}
                            sx={{
                                marginLeft: '100px',
                                marginTop: '150px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '@media (max-width: 600px)': {
                                    display: 'none',
                                    margin: '0px'
                                },
                                marginRight: '0px',
                            }}>

                            <img
                                src={signUpImg}
                                alt="Sign Up"
                                className="google-drive-image"
                                style={{ width: '300px', height: '200px', marginRight: '0px' }}
                            />

                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>


    )
}

export default SignUp
