"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ChartProps {
  title: string
  description?: string
  className?: string
}

interface LineChartProps extends ChartProps {
  data: { name: string; value: number }[]
}

interface BarChartProps extends ChartProps {
  data: { name: string; value: number }[]
}

interface PieChartProps extends ChartProps {
  data: { name: string; value: number }[]
}

const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#EC4899']

export function LineChartComponent({ title, description, data, className }: LineChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="text-xs text-muted-foreground">
            Trend Analysis
          </div>
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))"
              opacity={0.5}
            />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              strokeWidth={3}
              stroke="#3B82F6"
              fill="url(#colorRevenue)"
              fillOpacity={0.6}
              dot={{ 
                fill: '#3B82F6', 
                strokeWidth: 2, 
                r: 5,
                className: "hover:r-6 transition-all duration-200"
              }}
              activeDot={{ 
                r: 8, 
                stroke: '#3B82F6', 
                strokeWidth: 2,
                fill: '#ffffff'
              }}
              animationDuration={1500}
              animationEasing="ease-in-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function BarChartComponent({ title, description, data, className }: BarChartProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="text-xs text-muted-foreground">
            Monthly Data
          </div>
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="colorConversions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={1}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(var(--border))"
              opacity={0.5}
            />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}K`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              formatter={(value) => [Number(value).toLocaleString(), 'Conversions']}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#colorConversions)"
              radius={[6, 6, 0, 0]}
              animationDuration={1000}
              animationEasing="ease-out"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export function PieChartComponent({ title, description, data, className }: PieChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }
  
  const onPieLeave = () => {
    setActiveIndex(undefined)
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            {title}
          </div>
        </CardTitle>
        {description && <CardDescription className="text-sm">{description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke={activeIndex === index ? "#fff" : "none"}
                  strokeWidth={activeIndex === index ? 3 : 0}
                  style={{
                    filter: activeIndex === index 
                      ? 'brightness(1.1) drop-shadow(0 4px 8px rgba(0,0,0,0.2))' 
                      : 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                padding: '8px 12px'
              }}
              formatter={(value, name) => [
                <span key={`value-${name}`} className="font-semibold">{value}%</span>,
                <span key={`name-${name}`} style={{ color: 'hsl(var(--foreground))' }}>{name}</span>
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Simple Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {data.map((entry, index) => (
            <div 
              key={entry.name} 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {entry.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}