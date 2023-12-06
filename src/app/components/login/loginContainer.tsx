'use client'
import Image from 'next/image'
import Link from "next/link";
import React, { ReactNode } from 'react';

interface LoginContainerProps {
    children: ReactNode;
}

export default function LoginContainer({children}: LoginContainerProps) {

    const containerStyle = {
        backgroundColor: 'rgba(169, 169, 169, 0.9)', // 10% transparent
        height: '45%',
        width: '30%',
        position: 'absolute' as const, // cast string to type 'absolute'
        top: '65%',  // Position from the top half of the screen
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
        flexDirection: 'column' as const,
        justifyContent: ' center',
        position: "relative" as const,
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
          
    }
    const inputStyle = {
        position: "relative" as const,
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        width: "50%",
        margin: "10px",
        borderRadius: "5px",
    }
    const forgotPasswordStyle = {
        position: "relative" as const,
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        width: "50%",
        margin: "10px",
        borderRadius: "5px",
        color: '#0000cd',  // Change this to the color you want]
    }

    
    const SubmitStyle = {
        backgroundColor: "white",
        borderRadius: "5px",
        width: "17%",
        height: "50%",
        position: "relative" as const,
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-100%, -50%)',
        display: "flex",
        margin:"10px",
        justifyContent: 'center',  // Added property to center text
        alignItems: 'center', 
        flexDirection: 'row' as const, // or 'nowrap'
    }
    const Titulostyle = {
        color: "black",
        position: "relative" as const,
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        margin: "10px",
        borderRadius: "5px",
        display:"flex",
        justifyContent: "center",
        fontSize: '25px',  // Change this to the size you want
    }
    const submitComment = async () => {
        const emailElement = document.getElementById("email") as HTMLInputElement | null;
        const passwordElement = document.getElementById("password") as HTMLInputElement | null;
    
        if (!emailElement || !passwordElement) {
            console.error("Email or password field is missing");
            return;
        }
    
        const email = emailElement.value;
        const password = passwordElement.value;
    
        const response = await fetch('http://localhost:8000/user/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "email": email, "password" : password}),
        });
    
        const { error } = await response.json();
    
        if (error) {
            console.error(error);
        }
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
                {children}
                {/* <Link onClick={submitComment} className="text-center" style={SubmitStyle} href="/register"><h1>register</h1></Link> */}
            </div>
        </li>
    </div>
)}