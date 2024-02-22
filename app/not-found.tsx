import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-2xl md:text-7xl">404 Not Found</h1>
      <p className="text-xs my-12">
        Your visited page could not be found. You may go home page.
      </p>
      <Link href="/">
        <Button
          variant="destructive"
          type="submit"
          className="px-8 rounded-sm bg-[#DB4444]"
        >
          Back to home page
        </Button>
      </Link>
    </div>
  );
}
