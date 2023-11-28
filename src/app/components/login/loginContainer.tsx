'use client'
import Image from 'next/image'
import { useState } from 'react';
import Link from "next/link";

export default function LoginContainer() {
    const containerStyle = {
        backgroundColor: '#A9A9A9',
        height: '70%',
        width: '30%',
        position: 'absolute',  // Position the element
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)', 
        justifyContent: 'center',
        borderRadius: "25px",
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
        width: "17%",
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
        color: "black",
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        margin: "10px",
        borderRadius: "5px",
        display:"flex",
        textAlign: "center",
        justifyContent: "center",
        fontSize: '25px',  // Change this to the size you want
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
    const forgotPasswordStyle = {
        position: "relative",
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        width: "50%",
        margin: "10px",
        borderRadius: "5px",
        color: '#0000cd',  // Change this to the color you want
    }
    
return (
    <div style={containerStyle}>
        <li style={listStyle}>
            <h1 style={Titulostyle}>LOGIN</h1>
            <a style={inputStyle}>Email:</a>
            <input type="text" id="email" style={inputStyle}/>
            <a style={inputStyle}>Password:</a>
            <input type="text" id="password" style={inputStyle}/>
            <Link style={forgotPasswordStyle} color='blue' href="/forgotpassword">Forgot password?</Link>
            <div className='flex flex-row'>
                <button onClick={submitComment} style={SubmitStyle}><h1>Login</h1></button>
                <Link onClick={submitComment} className="text-center" style={SubmitStyle} href="/register"><h1>register</h1></Link>
            </div>
            <li style={listStyle}>
            {/* <Image src="/376605.png" alt="376605.png" width={500} height={300} />            <h1 style={Titulostyle}>teste</h1> */}
            {/* ... rest of your JSX */}
        </li>

        </li>
        
    </div>
)