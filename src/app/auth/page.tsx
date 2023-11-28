import Navbar from '@/app/components/login/navbar'
import LoginContainer from "@/app/components/login/loginContainer"
import BackContainer from "@/app/components/login/backContainer"

export default function Home() {
    return (
        <main>
            <Navbar/>
                <LoginContainer/>
            <BackContainer>
            </BackContainer>
        </main>
    )
}