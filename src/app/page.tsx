import Image from 'next/image'
import Navbar from './components/login/navbar'
import LoginConteiner from './components/login/LoginConteiner'

export default function Home() {
  return (
    <>
      <Navbar/>
      <LoginConteiner/>
    </>
  )
}