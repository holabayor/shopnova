'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { InputWithBottomBorder } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First Name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid Email Address.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 6 characters.',
  }),
});

const SignupForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithBottomBorder placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputWithBottomBorder placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithBottomBorder placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithBottomBorder placeholder="Password" {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <div>
          <Button
            variant="destructive"
            type="submit"
            className="w-full font-normal rounded-sm bg-[#DB4444]"
          >
            Sign up
          </Button>
          <Button
            variant="outline"
            type="button"
            className="w-full font-normal rounded-sm mt-4"
          >
            Sign up with Google
          </Button>
        </div>
        <div className="flex gap-2 justify-center text-xs">
          Already have an account?
          <Link
            href={'/login'}
            className="font-normal border-b border-b-slate-500 hover:border-black transition-all"
          >
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignupForm;
