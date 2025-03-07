import { Logo } from '@/assets/logo'
import { NavItem } from './nav-item'
import { Dashboard } from '@/assets/dashboard'
import { Transactions } from '@/assets/transactions'

export function Sidebar() {
  return (
    <div className="w-full max-w-sm flex-1 flex flex-col px-6 py-8 bg-gray-125">
      <Logo />
      <nav className="mt-10 space-y-1">
        <NavItem path="/dashboard" title="Dashboard" icon={<Dashboard />} />
        <NavItem
          path="/transactions"
          title="Transactions"
          icon={<Transactions />}
        />
        <NavItem path="/invoices" title="Invoices" />
      </nav>
    </div>
  )
}
