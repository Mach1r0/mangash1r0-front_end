'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function LoginContainer() {
    const containerStyle = {
        backgroundColor: '#A9A9A9',
        height: '70%',
        width: '40%',
        position: 'absolute',  // Position the element
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)', 
        justifyContent: 'center',
        borderRadius: "5px",
    }
    const listStyle = {
        margin: "0",
        padding: "0",
        border: "0",
        display: 'flex',  // Make the element a flex container
        flexDirection: 'column',
        justifyContent: ' center',
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
    }
    const inputStyle = {
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        width: "50%",
        margin: "10px",
        borderRadius: "5px",
    }
    
    const SubmitStyle = {
        backgroundColor: "white",
        borderRadius: "5px",
        width: "10%",
        height: "50%",
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-100%, -50%)',
        display: "flex",
        flexDirection: "row",
        margin:"10px",
        textAlign: "center",
        justifyContent: 'center',  // Added property to center text
        alignItems: 'center',  // Added property to center text
    }
    const Titulostyle = {
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        margin: "10px",
        borderRadius: "5px",
    }
    const submitComment = async () => {
        const email = document.getElementById("email")
        const password = document.getElementById("password")

        const response = await fetch('/http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        const { error } = await response.json()

        if (error) {
            console.error(error)
        }
    }

return (
    <div style={containerStyle}>
        <li style={listStyle}>
            <h3 style={Titulostyle}>LOGIN</h3>
            <a style={inputStyle}>email</a>
            <input type="text" id="email" style={inputStyle}/>
            <a style={inputStyle}>password</a>
            <input type="text" id="password" style={inputStyle}/>
            <a style={inputStyle}>Forgot password</a>
            <div className='flex flex-row'>
                <button onClick={submitComment} style={SubmitStyle}><h1>Login</h1></button>
                <button onClick={submitComment} className="text-center" style={SubmitStyle}><h1>Submit</h1></button>
            </div>
        </li>
    </div>
)