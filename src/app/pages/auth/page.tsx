"use client"
import Navbar from '@/app/components/login/navbar';
import LoginContainer from '@/app/components/login/loginContainer';
import RegisterContainer from '@/app/components/login/register'; // Import this
import Background from '@/app/components/login/backContainer';
import BackContainer from '@/app/components/login/backContainer';
import { useState } from 'react';

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  
  const SubmitStyle = {
    backgroundColor: "white",
    borderRadius: "5px",
    width: "17%",
    height: "50%",
    position: "relative" as const,
    top: '50%',  // Position from the top half of the screen
    left: '50%',  // Position from the left half of the screen
    transform: 'translate(-100%, -50%)',
    display: "flex",
    margin:"10px",
    justifyContent: 'center',  // Added property to center text
    alignItems: 'center', 
    flexDirection: 'row' as const, // or 'nowrap'

  }
  
  const StyleButton = {
  
  }
  return (
    <main>
      <Navbar />
      <BackContainer>
        {showLogin && <LoginContainer>
           <button onClick={() => setShowLogin(false) }className="text-center" style={SubmitStyle}>
              Register
            </button>
        </LoginContainer>}
        {!showLogin && <RegisterContainer>
          <button style={StyleButton} onClick={() => setShowLogin(true) }className="text-center" style={SubmitStyle}>
          Back to login
          </button>
        </RegisterContainer>}
      </BackContainer>
    </main>
  );
}