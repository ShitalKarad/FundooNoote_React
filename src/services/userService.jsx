import axios from 'axios'
import React from 'react'

export let signIn = async (input) =>{
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/login",input);

        console.log(response);
        return response;
}

export let signUp = async (input) =>{
    let response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",input);

        console.log(response);
        return response;
}
