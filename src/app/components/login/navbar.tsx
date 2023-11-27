import Image from 'next/image'

export default function Navbar() {
    const navbarStyle = {
        backgroundColor: '#333333',
        height: '80px',
        width: '100%'
    }

    return (
        <main style={navbarStyle}>
            <h1>Navbar</h1>
        </main>
    )
}