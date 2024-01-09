import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

export default function AnimeView({ children }: Props) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
    }

    const listStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }

    const inputStyle = {
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc'
    }

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
        cursor: 'pointer'
    }

    return (
        <div style={containerStyle}>
            <div style={listStyle}>
                <a style={linkStyle}>Search</a>
                <input style={inputStyle} type="text" placeholder=""/>
                <a style={linkStyle}>Genres</a>
                <input style={inputStyle} type="text" placeholder=""/>
                <a style={linkStyle}>Year</a>
                <input style={inputStyle} type="text" placeholder=""/>
                <a style={linkStyle}>Best animes</a>
                <a style={linkStyle}>Best animes of psych</a>
            </div>
        </div>
    );
}