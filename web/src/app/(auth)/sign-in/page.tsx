'use client'

import { Logo } from '@/assets/logo'
import { Checkbox } from '@/components/checkbox'
import Link from 'next/link'
import Form from 'next/form'
import { Google } from '@/assets/google'
import { signInWithCredentials } from './sign-in-with-credentials'
import { signInWithGoogle } from './sign-in-with-google'
import { useActionState } from 'react'
import { LoaderCircle } from 'lucide-react'
import clsx from 'clsx'

export default function SignIn() {
  const [state, sigInFormAction, isPending] = useActionState(
    signInWithCredentials,
    null,
  )

  return (
    <div className="flex-1">
      <div className="flex h-full flex-col justify-between w-full max-w-xl mx-auto py-10">
        <div className="dark:fill-white">
          <Logo />
        </div>
        <main>
          <h1 className="font-semibold text-3xl text-gray-700 dark:text-white">
            Sign In
          </h1>
          <p className="text-gray-300 mt-2">
            Welcome back! Please enter your details
          </p>
          <Form action={sigInFormAction} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label className="text-gray-700 dark:text-white font-medium text-sm">
                Email
              </label>
              <div className="px-5 py-4 border border-gray-100 dark:border-gray-500 rounded-lg">
                <input
                  name="email"
                  className="w-full font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium text-gray-700 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-gray-700 dark:text-white font-medium text-sm">
                Password
              </label>
              <div className="px-5 py-4 border border-gray-100 dark:border-gray-500 rounded-lg">
                <input
                  name="password"
                  type="password"
                  className="w-full font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium text-gray-700 dark:text-white"
                  placeholder="•••••••"
                />
              </div>
            </div>
            {state?.error && (
              <div className="border border-red-600 bg-red-600/25 rounded-md p-3 my-4">
                <p className="text-red-600 text-center">{state?.error}</p>
              </div>
            )}
            <div className="flex justify-between mt-1">
              <div className="flex gap-2 items-center">
                <Checkbox id="keepLoggedIn" />
                <label
                  htmlFor="keepLoggedIn"
                  className="text-gray-700 dark:text-white font-medium text-sm"
                >
                  Remember for 30 Days
                </label>
              </div>
              <Link
                href="/forgot-password"
                className="font-medium text-gray-700 dark:text-white text-sm"
              >
                Forgot password
              </Link>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className={clsx(
                'mt-4 px-5 py-4 bg-lime-600 font-semibold rounded-lg flex items-center justify-center gap-2',
                {
                  'opacity-70 cursor-not-allowed': isPending,
                },
              )}
            >
              Sign in
              {isPending && <LoaderCircle className="animate-spin w-4 h-4" />}
            </button>
          </Form>
          <footer className="flex flex-col gap-4 mt-4">
            <Form action={signInWithGoogle}>
              <button
                type="submit"
                className="w-full dark:text-gray-300 dark:border-gray-500 px-5 py-4 border border-gray-150 font-semibold rounded-lg flex gap-2 items-center justify-center"
              >
                <Google />
                Sign in with google
              </button>
            </Form>
            <span className="text-center mt-2 text-gray-200 text-sm">
              Don’t have an account?{' '}
              <Link
                href="/sign-up"
                className="relative text-gray-700 font-medium dark:text-white"
              >
                Sign up for free
                <svg
                  width="98"
                  height="15"
                  viewBox="0 0 98 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 translate-y-2.5 outline-none"
                >
                  <path
                    d="M1 12.9748C15.6667 2.14144 76 -5.02548 97 12.9748"
                    stroke="#C8EE44"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
            </span>
          </footer>
        </main>
        <div />
      </div>
    </div>
  )
}
