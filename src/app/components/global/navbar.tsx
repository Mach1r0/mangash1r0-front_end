"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react';


export default function Navbar() {
    const navbarStyle = {
        backgroundColor: '#333333',
        height: '65px',
        width: '100%',
        display: 'flex', // Change this
        justifyContent: 'space-between', // Keep this
        alignItems: 'center', // Keep this
    }
    
    const NavbarImageStyle = {

    }

    const styleletter = {
        fontSize: '20px' as const,
        color: 'white',
        textAlign: 'center' as const, // Keep this
        margin: '0 30px', // Keep this
    }

    const blurnav = {
        position: 'relative' as const,
        top: '100%',
        left: '0',
        width: '100%',
        height: '10px',
        backdropFilter: 'blur(10px)',
    }
    const stylelist = {
        listStyle: "none",
        display: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%' 
}

return (
        <main style={navbarStyle}>
            <div style={NavbarImageStyle}>
                <Image height={100} width={100} alt='navbarimage' src="/friend.png"/>
            </div>
            <div style={stylelist}> 
                <li style={stylelist}>
                    <Link style={styleletter} href="aboutus">About us</Link>
                    <Link style={styleletter} href='animelist'>Anime list</Link>
                    <Link style={styleletter} href='mangalist'>manga list</Link>
                    <Link style={styleletter} href='profile'>profile</Link>
                </li>
                <div style={blurnav}/>
            </div>
        </main>
    )
}