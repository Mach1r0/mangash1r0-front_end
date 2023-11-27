import Image from 'next/image'

export default function Navbar() {
    const navbarStyle = {
        backgroundColor: '#ffffff',
        height: '60%',
        width: '100%'
    }

    return (
        <main style={navbarStyle}>
            <div>
                <h1>Navbar</h1>
            </div>
        </main>
    )
}