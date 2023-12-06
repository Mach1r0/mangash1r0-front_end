import Link from "next/link"

export default function RegisterContainer() {
    const containerStyle = {
        backgroundColor: 'rgba(169, 169, 169, 0.9)', // 10% transparent
        height: '50%',
        width: '30%',
        position: 'absolute' as const, // cast string to type 'absolute'
        top: '65%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',
        justifyContent: 'center' as const,
        borderRadius: "25px",
        display: 'flex', // Add this
        flexDirection: 'column' as const, // Add this
        alignItems: 'center', // Add this
    }

    const inputStyle = {
        width: "50%",
        margin: "10px",
        borderRadius: "5px",
    }

    const Titulostyle = {
        color: "black",
        margin: "10px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        fontSize: '25px',  // Change this to the size you want
    }
    
    const buttonStyle = {
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
    }

    return (
        <div style={containerStyle}>
            <h1 style={Titulostyle}>Sign up</h1>
            <a style={inputStyle}>Email:</a>
            <input type="text" id="email" style={inputStyle} />
            <a style={inputStyle}>Password:</a>
            <input type="text" id="password" style={inputStyle} />
            <a style={inputStyle}>Confirm Password:</a>
            <input type="text" id="confirmPassword" style={inputStyle} />
            <button style={buttonStyle}>Register</button>
            <Link href="/pages/auth">
            <button style={buttonStyle}>Go to login</button>
            </Link>
        </div>
    )
}
