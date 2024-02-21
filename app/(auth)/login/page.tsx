import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <h2>Log in to ShopNova</h2>
      <p>Enter your details below</p>
      <LoginForm />
    </>
  );
}
