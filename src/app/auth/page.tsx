import Navbar from '@/app/components/login/navbar';
import LoginContainer from '@/app/components/login/loginContainer';
import Background from '@/app/components/login/backContainer';
import BackContainer from '@/app/components/login/backContainer';
export default function Auth() {
  return (
    <main>
      <Navbar />
      <BackContainer>
        <LoginContainer />
      </BackContainer>
    </main>
  );
}
