'use client';

import React from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignInForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if(result?.ok) {
      router.push('/'); 
    } else { 
      console.error('Failed to sign in');
    }
  };

  return (
    <div className="p-8 sm:p-12.5 lg:p-17.5">
      <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
        Entrar
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-5.5">
          <label className="mb-2.5 block font-medium text-sm text-black dark:text-white" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            required
            className="w-full rounded border border-stroke py-2.5 px-4 dark:border-strokedark"
          />
        </div>
        <div className="mb-5.5">
          <label className="mb-2.5 block font-medium text-sm text-black dark:text-white" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            className="w-full rounded border border-stroke py-2.5 px-4 dark:border-strokedark"
          />
        </div>
        <div className="flex justify-between">
          <div className="mb-5.5">
            <button
              type="submit"
              className="inline-block w-full rounded bg-primary py-2.5 px-4 text-center text-white"
            >
              Sign In
            </button>
          </div>
        </div>
        <p className="text-sm text-black dark:text-white">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
