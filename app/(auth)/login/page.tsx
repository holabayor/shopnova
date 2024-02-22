import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <>
      <h2 className="font-semibold text-center">Log in to ShopNova</h2>
      <p className="text-center text-xs mb-4 md:mb-8">Enter your details below</p>
      <LoginForm />
    </>
  );
}
