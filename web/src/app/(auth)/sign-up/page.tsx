import { Logo } from '@/assets/logo'
import { Checkbox } from '@/components/checkbox'
import Link from 'next/link'

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
          <form className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <label className="text-gray-700 dark:text-white font-medium text-sm">
                Full Name
              </label>
              <div className="px-5 py-4 border border-gray-100 dark:border-gray-500 rounded-lg">
                <input
                  className="font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium"
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
                  className="font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium"
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
                  className="font-sm bg-transparent outline-none placeholder-gray-300 placeholder:font-medium"
                  placeholder="•••••••"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <button className="px-5 py-4 bg-lime-600 font-semibold rounded-lg">
                Create Account
              </button>
              <button className="dark:text-gray-300 dark:border-gray-500 px-5 py-4 border border-gray-150 font-semibold rounded-lg flex gap-2 items-center justify-center">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.3055 10.0415L21.5 10.0415L21.5 10L12.5 10L12.5 14L18.1515 14C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                    fill="#FBC02D"
                  />
                  <path
                    d="M3.65332 7.3455L6.93882 9.755C7.82782 7.554 9.98082 6 12.5003 6C14.0298 6 15.4213 6.577 16.4808 7.5195L19.3093 4.691C17.5233 3.0265 15.1343 2 12.5003 2C8.65932 2 5.32832 4.1685 3.65332 7.3455Z"
                    fill="#E53935"
                  />
                  <path
                    d="M12.5002 22.0001C15.0832 22.0001 17.4302 21.0116 19.2047 19.4041L16.1097 16.7851C15.1057 17.5456 13.8577 18.0001 12.5002 18.0001C9.89916 18.0001 7.69066 16.3416 6.85866 14.0271L3.59766 16.5396C5.25266 19.7781 8.61366 22.0001 12.5002 22.0001Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M22.3055 10.0415L22.2975 10L21.5 10L12.5 10L12.5 14L18.1515 14C17.7555 15.1185 17.036 16.083 16.108 16.7855C16.1085 16.785 16.109 16.785 16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                    fill="#1565C0"
                  />
                </svg>
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
          </form>
        </main>
        <div />
      </div>
    </div>
  )
}
