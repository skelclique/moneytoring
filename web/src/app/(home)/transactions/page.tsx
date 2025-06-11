/* eslint-disable @next/next/no-img-element */
import { Search } from '@/assets/search'
import Image from 'next/image'
import IphoneImg from '@/assets/iphone.png'
import { Button } from '@/components/button'

export default function Transactions() {
  return (
    <div>
      <div className="mt-5">
        <div className="flex gap-3 rounded-2xl bg-gray-175 px-4 py-3 max-w-sm stroke-gray-400 dark:bg-gray-500 dark:stroke-gray-300">
          <Search />
          <input
            placeholder="Search anything on Transactions"
            className="bg-transparent outline-none w-full text-sm text-gray-200 dark:text-gray-300"
          />
        </div>
      </div>
      <div className="h-px w-full bg-gray-150 dark:bg-gray-500 mt-6" />
      <div className="mt-6">
        <table className="table-fix w-full">
          <thead>
            <tr>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                NAME/BUSINESS
              </th>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                TYPE
              </th>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                AMOUNT
              </th>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                DATE
              </th>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                INVOICE ID
              </th>
              <th className="font-semibold text-xs text-gray-200 dark:text-gray-300 text-left">
                ACTION
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
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Mobile
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $420.84
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    14 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124877
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
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
                    <p className="text-sm text-gray-200 font-normal">Netflix</p>
                  </div>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Entertainment
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $100.00
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    05 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124876
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
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
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Software
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $244.20
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    02 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124875
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
              </td>
            </tr>
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
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Mobile
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $420.84
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    14 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124877
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
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
                    <p className="text-sm text-gray-200 font-normal">Netflix</p>
                  </div>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Entertainment
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $100.00
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    05 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124876
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
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
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Software
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $244.20
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    02 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124875
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
              </td>
            </tr>
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
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Mobile
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $420.84
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    14 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124877
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
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
                    <p className="text-sm text-gray-200 font-normal">Netflix</p>
                  </div>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                Entertainment
              </td>
              <td className="py-4 group-first:pt-5 text-left font-semibold text-sm text-gray-700 dark:text-white">
                $100.00
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <div className="flex flex-col gap-1 items-start">
                  <p className="font-medium text-sm text-gray-700 dark:text-white">
                    05 Apr 2022
                  </p>
                  <span className="text-gray-300 text-[13px]">at 8:00 PM</span>
                </div>
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                MNT0124876
              </td>
              <td className="py-4 group-first:pt-5 text-left font-medium text-sm text-gray-200 dark:text-gray-300">
                <Button>View</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
