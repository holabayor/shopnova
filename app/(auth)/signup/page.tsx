import SignupForm from '@/components/SignupForm';

export default function SignupPage() {
  return (
    <>
      <h2 className="font-semibold text-center">
        Create and account with ShopNova
      </h2>
      <p className="text-center text-xs mb-4 md:mb-8">
        Enter your details below
      </p>
      <SignupForm />
    </>
  );
}
