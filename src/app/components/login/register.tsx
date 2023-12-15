import Link from 'next/link';
import { ReactNode, FormEvent } from 'react';

interface RegisterContainerProps {
  children?: ReactNode;
}

export default function RegisterContainer({ children }: RegisterContainerProps) {
  const containerStyle = {
    backgroundColor: 'rgba(169, 169, 169, 0.9)', // 10% transparent
    height: '50%',
    width: '30%',
    position: 'absolute' as const, // cast string to type 'absolute'
    top: '65%', // Position from the top half of the screen
    left: '50%', // Position from the left half of the screen
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center' as const,
    borderRadius: '25px',
    display: 'flex', // Add this
    flexDirection: 'column' as const, // Add this
    alignItems: 'center', // Add this
  };

  const inputStyle = {
    width: '50%',
    margin: '10px',
    borderRadius: '5px',
  };

  const Titulostyle = {
    color: 'black',
    margin: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '25px', // Change this to the size you want
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  function validateEmail(email: string) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePassword(password: string) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }

  const submitComment = async () => {
    console.log("saindo")
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const passwordElement = document.getElementById(
      'password',
    ) as HTMLInputElement | null;
    const confirmPasswordElement = document.getElementById(
      'confirmPassword',
    ) as HTMLInputElement | null;
    console.log("saindo")
    if (!emailElement || !passwordElement || !confirmPasswordElement) {
      console.error('Email or password field is missing');
      return;
    }

    const email = emailElement.value;
    const password = passwordElement.value;
    const confirmPassword = confirmPasswordElement.value;

    if (!validateEmail(email)) {
      console.error('Email is not valid');
      return;
    }

    if (!validatePassword(password)) {
      console.error('Password does not meet the criteria');
      return;
    }

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const response = await fetch('http://localhost:8000/user/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const Jsonerror = await response.json();

    if (Jsonerror) {
      console.error(Jsonerror);
    }
  };

  return (
    <form style={containerStyle} onSubmit={submitComment}>
      <h1 style={Titulostyle}>Sign up</h1>
      <a style={inputStyle}>Email:</a>
      <input type="text" id="email" style={inputStyle} />
      <a style={inputStyle}>Password:</a>
      <input type="password" id="password" style={inputStyle} />
      <a style={inputStyle}>Confirm Password:</a>
      <input type="password" id="confirmPassword" style={inputStyle} />
      <button style={buttonStyle} type="submit" onClick={submitComment}>
        Register
      </button>
      <a>
        <a>{children}</a>
      </a>
    </form>
  );
}
