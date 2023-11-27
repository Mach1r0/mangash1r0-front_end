import Image from 'next/image'

export default function Navbar() {
    const LoginContainer = {
        backgroundColor: '#A9A9A9',
        height: '600px',
        width: '40%',
        position: 'absolute',  // Position the element
        top: '50%',  // Position from the top half of the screen
        left: '50%',  // Position from the left half of the screen
        transform: 'translate(-50%, -50%)',  // Move the element's center to the screen's center
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <main style={LoginContainer}>
            <h1>LoginContainer</h1>
        </main>
    )
}