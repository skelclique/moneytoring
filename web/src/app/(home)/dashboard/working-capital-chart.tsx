'use client'

import { colors } from '@/styles/theme'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { date: new Date('2024-04-14'), income: 4800, expenses: 5000 },
  { date: new Date('2024-04-15'), income: 5200, expenses: 6200 },
  { date: new Date('2024-04-16'), income: 4900, expenses: 7200 },
  { date: new Date('2024-04-17'), income: 5500, expenses: 6600 },
  { date: new Date('2024-04-18'), income: 4000, expenses: 5800 },
  { date: new Date('2024-04-19'), income: 4600, expenses: 5400 },
  { date: new Date('2024-04-20'), income: 5300, expenses: 4900 },
]

export function WorkingCapitalChart() {
  const darkMode = true

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid
          horizontal={false}
          stroke={darkMode ? colors['gray-600'] : colors['gray-115']}
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 14,
            fill: darkMode ? colors['gray-300'] : colors['gray-200'],
          }}
          tickFormatter={(date) =>
            new Date(date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
            })
          }
          tickMargin={14}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 14,
            fill: darkMode ? colors['gray-300'] : colors['gray-200'],
          }}
          tickFormatter={(value) => `${value / 1000}K`}
          tickMargin={32}
        />
        <Line
          type="monotone"
          dataKey="income"
          stroke={colors['green-600']}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke={colors['lime-600']}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
