import Image from 'next/image'
import Navbar from '@/app/components/login/navbar'
import LoginContainer from "@/app/components/login/loginContainer"
import Link from 'next/link'


export default function Home() {
  const containerStyle = {
    backgroundColor: 'black',
  }

  return (
    <main style={containerStyle}>
      <Link href="/auth">
        <button>
          ir para login
        </button>
      </Link>
    </main>
  )
}