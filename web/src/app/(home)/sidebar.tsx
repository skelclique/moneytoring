import { Logo } from '@/assets/logo'
import { NavItem } from './nav-item'
import { Dashboard } from '@/assets/dashboard'
import { Transactions } from '@/assets/transactions'
import { Invoices } from '@/assets/invoices'
import { Wallets } from '@/assets/wallets'
import { Settings } from '@/assets/settings'
import { Help } from '@/assets/help'
import { Logout } from '@/assets/logout'
import Form from 'next/form'
import { signOut } from '@/auth'

export function Sidebar() {
  return (
    <div className="w-full max-w-xs flex-1 flex flex-col px-6 py-8 bg-gray-125 dark:bg-gray-800 select-none">
      <div className="dark:fill-white">
        <Logo />
      </div>
      <nav className="mt-10 gap-1 flex flex-col flex-1">
        <NavItem path="/dashboard" title="Dashboard" icon={<Dashboard />} />
        <NavItem
          path="/transactions"
          title="Transactions"
          icon={<Transactions />}
        />
        <NavItem path="/invoices" title="Invoices" icon={<Invoices />} />
        <NavItem path="/wallets" title="My Wallets" icon={<Wallets />} />
        <NavItem path="/settings" title="Settings" icon={<Settings />} />
        <footer className="mt-auto pb-10">
          <NavItem path="/support" title="Help" icon={<Help />} />
          <Form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <NavItem title="Logout" icon={<Logout />} />
          </Form>
        </footer>
      </nav>
    </div>
  )
}
