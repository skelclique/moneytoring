import { Notifications } from '@/assets/notifications'
import { Search } from '@/assets/search'
import Image from 'next/image'

import { Dropdown } from '@/assets/dropdown'
import { Wallet } from '@/assets/wallet'
import { WalletSaves } from '@/assets/wallet-saves'
import { ChevronDown } from '@/assets/chevron-down'
import { auth } from '@/auth'
import { ChevronRight, User } from 'lucide-react'
import { WorkingCapitalChart } from './working-capital-chart'
import Link from 'next/link'

import IphoneImg from '@/assets/iphone.png'

export default async function Dashboard() {
  const session = await auth()

  return (
    <div className="flex-1 py-8 px-10">
      <header className="flex">
        <h1 className="font-semibold text-2xl text-gray-700 dark:text-white">
          Dashboard
        </h1>
        <div className="ml-auto flex gap-10">
          <button>
            <Search />
          </button>
          <button>
            <Notifications />
          </button>
          <div className="bg-gray-125 py-1.5 px-2.5 rounded-full flex gap-3 items-center dark:bg-gray-600">
            {session?.user?.image ? (
              <Image
                src={session?.user?.image ?? ''}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-450 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
            <span className="font-semibold text-sm text-gray-700 dark:text-white">
              {session?.user?.name}
            </span>
            <button className="cursor-pointer dark:fill-white ml-3">
              <Dropdown />
            </button>
          </div>
        </div>
      </header>
      <main className="mt-8 grid grid-cols-3 gap-10">
        <div className="col-span-2 flex flex-col gap-8">
          <section className="flex gap-6">
            <div className="bg-gray-400 px-5 py-6 rounded-lg flex flex-1 gap-4 items-center dark:bg-gray-500">
              <div className="bg-gray-350 px-2.5 py-2.5 rounded-full fill-lime-600 dark:bg-gray-450">
                <Wallet />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-200">Total balance</p>
                <h1 className="text-2xl font-bold text-white">$5240.21</h1>
              </div>
            </div>
            <div className="bg-gray-175 px-5 py-6 rounded-lg flex flex-1 gap-4 items-center dark:bg-gray-600">
              <div className="bg-gray-180 px-2.5 py-2.5 rounded-full fill-gray-400 dark:bg-gray-550 dark:fill-white">
                <Wallet />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-200">Total spending</p>
                <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
                  $250.80
                </h1>
              </div>
            </div>
            <div className="bg-gray-175 px-5 py-6 rounded-lg flex flex-1 gap-4 items-center dark:bg-gray-600">
              <div className="bg-gray-180 px-2.5 py-2.5 rounded-full fill-gray-400 dark:bg-gray-550 dark:fill-white">
                <WalletSaves />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-200">Total saved</p>
                <h1 className="text-2xl font-bold text-gray-700 dark:text-white">
                  $550.25
                </h1>
              </div>
            </div>
          </section>
          <article className="rounded-lg border border-gray-150 px-6 py-5 dark:border-gray-500">
            <div className="flex justify-between">
              <h1 className="text-gray-700 font-semibold text-lg dark:text-white">
                Working Capital
              </h1>
              <div className="flex gap-20">
                <div className="flex gap-8">
                  <div className="flex gap-1 items-center dark:text-white">
                    <div className="mr-2 rounded-full w-2 h-2 bg-green-600" />{' '}
                    Income
                  </div>
                  <div className="flex gap-1 items-center dark:text-white">
                    <div className="mr-2 rounded-full w-2 h-2 bg-lime-600" />{' '}
                    Expenses
                  </div>
                </div>
                <button className="dark:fill-white bg-gray-175 dark:bg-gray-500 rounded-md px-2.5 py-1.5 text-sm text-gray-700 flex gap-2 items-center justify-center dark:text-white">
                  Last 7 days <ChevronDown />
                </button>
              </div>
            </div>
            <div className="w-full h-56 mt-6">
              <WorkingCapitalChart />
            </div>
          </article>
          <article className="rounded-lg border border-gray-150 px-6 py-5 dark:border-gray-500">
            <div className="flex justify-between">
              <h1 className="text-gray-700 font-semibold text-lg dark:text-white">
                Recent Transaction
              </h1>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-green-600 text-sm font-semibold"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-5">
              <table className="table-fix w-full">
                <thead>
                  <tr>
                    <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                      NAME/BUSINESS
                    </th>
                    <th className="font-semibold text-xs text-gray-200 dark:text-gray-300">
                      TYPE
                    </th>
                    <th className="font-semibold text-xs text-gray-200 dark:text-gray-300">
                      AMOUNT
                    </th>
                    <th className="font-semibold text-xs text-gray-200 dark:text-gray-300">
                      DATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group last:border-0 border-b border-gray-150 dark:border-gray-600">
                    <td className="py-4 group-first:pt-5 font-semibold text-sm text-gray-700 dark:text-white">
                      <div className="flex gap-4 items-center">
                        <div className="bg-gray-190 dark:bg-gray-500 w-10 h-10 rounded-md flex items-center justify-center">
                          <Image src={IphoneImg} alt="Iphone 13 Pro MAX" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <h2>Iphone 13 Pro MAX</h2>
                          <p className="text-sm text-gray-200 font-normal">
                            Apple. Inc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      Mobile
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-semibold text-sm text-gray-700 dark:text-white">
                      $420.84
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      14 Apr 2022
                    </td>
                  </tr>
                  <tr className="group last:border-0 border-b border-gray-150 dark:border-gray-600">
                    <td className="py-4 group-first:pt-5 font-semibold text-sm text-gray-700 dark:text-white">
                      <div className="flex gap-4 items-center">
                        <div className="bg-gray-190 dark:bg-gray-500 w-10 h-10 rounded-md flex items-center justify-center">
                          <Image src={IphoneImg} alt="Iphone 13 Pro MAX" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <h2>Netflix Subscription</h2>
                          <p className="text-sm text-gray-200 font-normal">
                            Netflix
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      Entertainment
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-semibold text-sm text-gray-700 dark:text-white">
                      $100.00
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      05 Apr 2022
                    </td>
                  </tr>
                  <tr className="group last:border-0 border-b border-gray-150 dark:border-gray-600">
                    <td className="py-4 group-first:pt-5 font-semibold text-sm text-gray-700 dark:text-white">
                      <div className="flex gap-4 items-center">
                        <div className="bg-gray-190 dark:bg-gray-500 w-10 h-10 rounded-md flex items-center justify-center">
                          <Image src={IphoneImg} alt="Iphone 13 Pro MAX" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <h2>Figma Subscription</h2>
                          <p className="text-sm text-gray-200 font-normal">
                            Figma. Inc
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      Software
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-semibold text-sm text-gray-700 dark:text-white">
                      $244.20
                    </td>
                    <td className="py-4 group-first:pt-5 text-center font-medium text-sm text-gray-200 dark:text-gray-300">
                      02 Apr 2022
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
        <aside></aside>
      </main>
    </div>
  )
}
