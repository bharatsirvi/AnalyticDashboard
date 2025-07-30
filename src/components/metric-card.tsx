"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, Target, TrendingUp, TrendingDown, MousePointer, CreditCard } from "lucide-react"
import { cn, formatPercentage } from "@/lib/utils"
import { MetricCard } from "@/lib/data"

const iconMap = {
  DollarSign,
  Users,
  Target,
  TrendingUp,
  MousePointer,
  CreditCard,
}

interface MetricCardComponentProps {
  metric: MetricCard
  className?: string
}

export function MetricCardComponent({ metric, className }: MetricCardComponentProps) {
  const Icon = iconMap[metric.icon as keyof typeof iconMap] || TrendingUp
  const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown

  return (
    <Card className={cn(
      "relative overflow-hidden metric-card group border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300 shadow-md hover:shadow-xl",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {metric.title}
        </CardTitle>
        <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {metric.value}
        </div>
        <div className="flex items-center text-xs">
          <div className={cn(
            "flex items-center px-2 py-1 rounded-full font-medium transition-all duration-300",
            metric.trend === 'up' 
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
          )}>
            <TrendIcon className="h-3 w-3 mr-1" />
            <span>{formatPercentage(metric.change)}</span>
          </div>
          <span className="ml-2 text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  )
}
