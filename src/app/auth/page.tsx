import Image from 'next/image'
import Navbar from '@/app/components/login/navbar'
import LoginContainer from "@/app/components/login/loginContainer"
import OtherBackContainer from "@/app/components/login/backContainer"

export default function OtherBackContainer() {
    const containerStyle = {
        backgroundImage: `url('/376605.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <main style={containerStyle}>
            <Navbar/>
            <OtherBackContainer>
                <LoginContainer/>
            </OtherBackContainer>
        </main>
    )
}