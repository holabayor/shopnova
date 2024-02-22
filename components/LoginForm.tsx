'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { InputWithBottomBorder } from './ui/input';
import { Button } from './ui/button';
import React from 'react';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputWithBottomBorder placeholder="Email address" {...field} />
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
        <div className="flex justify-between items-center">
          <Button
            variant="destructive"
            type="submit"
            className="font-normal px-8 rounded-sm bg-[#DB4444]"
          >
            Log In
          </Button>
          <Link
            href={'/'}
            className="font-normal text-[#DB4444] hover:underline transition-all"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex gap-2 justify-center text-xs">
          Don't have an account?
          <Link
            href={'/signup'}
            className="font-normal border-b border-b-slate-500 hover:border-black transition-all"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
