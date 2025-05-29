/* eslint-disable @next/next/no-img-element */
import { Notifications } from '@/assets/notifications'
import { Search } from '@/assets/search'
import Image from 'next/image'

import { Dropdown } from '@/assets/dropdown'
import { Wallet } from '@/assets/wallet'
import { WalletSaves } from '@/assets/wallet-saves'
import { ChevronDown } from '@/assets/chevron-down'
import { auth } from '@/auth'
import { ChevronRight, MoreHorizontal, User } from 'lucide-react'
import { WorkingCapitalChart } from './working-capital-chart'
import Link from 'next/link'

import IphoneImg from '@/assets/iphone.png'
import AvatarImg from '@/assets/avatar.png'
import { Chip } from '@/assets/chip'
import { Wifi } from '@/assets/wifi'

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
      <main className="mt-8 grid grid-cols-3 gap-16">
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
                        <div className="bg-gray-150 dark:bg-black w-10 h-10 rounded-md flex items-center justify-center p-3.5">
                          <img
                            src="https://cdn.brandfetch.io/netflix.com/w/40/h/73/symbol?c=1idqUvcnQwgvs5KZg5K"
                            alt="Netflix"
                          />
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
                        <div className="bg-white dark:bg-black w-10 h-10 rounded-md flex items-center justify-center p-3.5">
                          <img
                            src="https://cdn.brandfetch.io/figma.com/w/40/h/60/symbol?c=1idqUvcnQwgvs5KZg5K"
                            alt="Figma. Inc"
                          />
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
        <aside>
          <article>
            <header className="flex justify-between">
              <h1 className="text-gray-700 font-semibold text-lg dark:text-white">
                Wallet
              </h1>
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-200" />
              </button>
            </header>
            <div className="mt-4">
              <div className="bg-gradient-to-br from-gray-375 to-gray-425 dark:from-gray-525 dark:to-gray-625 w-full py-5 px-8 rounded-2xl">
                <div className="flex items-center gap-2">
                  <h1 className="font-Gordita font-bold text-white">
                    moneytoring
                  </h1>
                  <div className="h-5 w-px bg-gray-325" />
                  <p className="font-Gordita font-medium text-xs text-gray-325">
                    Universal Bank
                  </p>
                </div>
                <div className="mt-7 flex justify-between items-center">
                  <Chip />
                  <Wifi />
                </div>
                <div className="mt-5">
                  <h1 className="font-Gordita font-bold text-lg text-white [word-spacing:0.3rem] tracking-widest">
                    5495 7381 3759 2321
                  </h1>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-Gordita font-medium text-md text-gray-325 self-start">
                    04/24
                  </p>
                  <div className="mt-1">
                    <img
                      src="https://cdn.brandfetch.io/mastercard.com/w/58/h/36/symbol?c=1idqUvcnQwgvs5KZg5K"
                      alt="Mastecard symbol"
                    />
                    <img
                      src="https://cdn.brandfetch.io/mastercard.com/w/58/h/16/theme/light/logo?c=1idqUvcnQwgvs5KZg5K"
                      alt="Mastecard logo"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer -translate-y-[70px] mx-4 bg-gradient-to-b from-[#2E2B4A]/40 to-[#29263F]/10 rounded-2xl">
              <div className="bg-gradient-to-b from-white/40 to-white/10 w-full py-5 px-8 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <h1 className="font-Gordita font-bold text-white">
                    moneytoring
                  </h1>
                  <div className="h-5 w-px bg-white" />
                  <p className="font-Gordita font-medium text-xs text-white">
                    Commercial Bank
                  </p>
                </div>
                <div className="mt-7 flex justify-between items-center">
                  <Chip />
                  <Wifi />
                </div>
                <div className="mt-6">
                  <h1 className="font-Gordita font-bold text-lg text-gray-700 dark:text-white [word-spacing:0.3rem] tracking-widest">
                    85952548****
                  </h1>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="font-Gordita font-medium text-md text-gray-200 self-start">
                    09/25
                  </p>
                  <div className="mt-1 bg-[#1A1F71] p-2 px-1 rounded-[4px]">
                    <img
                      src="https://cdn.brandfetch.io/visa.com/w/32/h/16/theme/light/logo?c=1idqUvcnQwgvs5KZg5K"
                      alt="Visa icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article>
            <header className="flex justify-between">
              <h1 className="text-gray-700 font-semibold text-lg dark:text-white">
                Scheduled Transfers
              </h1>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-green-600 text-sm font-semibold"
              >
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </header>
            <main className="mt-6 space-y-3">
              {Array.from({ length: 5 }).map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-125 pb-4 last:border-0 dark:border-gray-600"
                  >
                    <div className="flex gap-4 items-center">
                      <Image src={AvatarImg} className="w-9 h-9" alt="avatar" />
                      <div className="flex flex-col gap-1.5">
                        <h2 className="font-semibold text-sm text-gray-700 dark:text-white">
                          Saleh Ahmed
                        </h2>
                        <p className="font-medium text-xs text-gray-200 dark:text-gray-300">
                          April 28, 2022 at 11:00
                        </p>
                      </div>
                    </div>
                    <p className="text-black font-semibold dark:text-white">
                      - $435,00
                    </p>
                  </div>
                )
              })}
            </main>
          </article>
        </aside>
      </main>
    </div>
  )
}
