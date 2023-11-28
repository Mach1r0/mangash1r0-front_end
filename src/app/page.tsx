import Image from 'next/image'
import Navbar from '@/app/components/login/navbar'
import LoginContainer from "@/app/components/login/loginContainer"

export default function Home() {
  const containerStyle = {
    backgroundColor: 'black',
  }

  return (
    <main style={containerStyle}>
      <Navbar/>
      <LoginContainer/>
    </main>
  )
}