import { Logo } from '@/assets/logo'
import Link from 'next/link'
import Form from 'next/form'
import signUp from './signUp'
import { Google } from '@/assets/google'

export default function SignIn() {
  return (
    <div className="flex-1">
      <div className="flex h-full flex-col justify-between w-full max-w-xl mx-auto py-10">
        <div className="dark:fill-white">
          <Logo />
        </div>
        <main>
          <h1 className="font-semibold text-3xl text-gray-700 dark:text-white">
            Create new account
          </h1>
          <p className="text-gray-300 mt-2">
            Give us some of your information to get free access to fieldly.
          </p>
          <Form action={signUp} className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label className="text-gray-700 dark:text-white font-medium text-sm">
                Full Name
              </label>
              <div className="px-5 py-4 border border-gray-100 dark:border-gray-500 rounded-lg">
                <input
                  name="name"
                  className="w-full font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium dark:text-white"
                  placeholder="Mahfuzul Nabil"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-gray-700 dark:text-white font-medium text-sm">
                Email
              </label>
              <div className="px-5 py-4 border border-gray-100 dark:border-gray-500 rounded-lg">
                <input
                  name="email"
                  className="w-full font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium dark:text-white"
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
                  className="w-full font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium dark:text-white"
                  placeholder="•••••••"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <button
                type="submit"
                className="px-5 py-4 bg-lime-600 font-semibold rounded-lg"
              >
                Create Account
              </button>
              <button
                type="button"
                className="dark:text-gray-300 dark:border-gray-500 px-5 py-4 border border-gray-150 font-semibold rounded-lg flex gap-2 items-center justify-center"
              >
                <Google />
                Sign up with google
              </button>
            </div>
            <span className="text-center mt-2 text-gray-200 text-sm">
              Already have an account?{' '}
              <Link
                href="/sign-in"
                className="relative text-gray-700 font-medium dark:text-white"
              >
                Sign in
                <svg
                  width="46"
                  height="9"
                  viewBox="0 0 46 9"
                  fill="none"
                  className="absolute right-0 translate-y-2.5"
                >
                  <path
                    d="M1.5 7C8.06944 2.06444 35.0937 -1.20074 44.5 6.99999"
                    stroke="#C8EE44"
                    strokeWidth="3"
                  />
                </svg>
              </Link>
            </span>
          </Form>
        </main>
        <div />
      </div>
    </div>
  )
}
