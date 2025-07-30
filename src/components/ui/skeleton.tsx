"use client"

import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted relative overflow-hidden", className)}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}

// Enhanced skeletons with shimmer effect
export function MetricCardSkeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={cn("relative overflow-hidden animate-fadeIn", className)} {...props}>
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <Skeleton className="h-4 w-32 bg-muted/60" />
        <Skeleton className="h-10 w-10 rounded-lg bg-primary/10" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-24 mb-3 bg-muted/80" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-3 w-3 rounded-full bg-green-200" />
          <Skeleton className="h-3 w-16 bg-muted/60" />
        </div>
      </CardContent>
    </Card>
  )
}

export function ChartSkeleton({ className, title, ...props }: React.HTMLAttributes<HTMLDivElement> & { title?: string }) {
  return (
    <Card className={cn("relative overflow-hidden animate-slideIn", className)} {...props}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <CardHeader>
        <Skeleton className="h-6 w-32 bg-muted/70" />
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {/* Chart bars with staggered animation */}
          <div className="flex items-end justify-between h-40 space-x-2">
            {[...Array(8)].map((_, i) => {
              // Use deterministic heights to avoid hydration mismatches
              const heights = [60, 35, 80, 65, 85, 50, 45, 75];
              return (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-primary/20 to-primary/5 rounded-t animate-slideUp"
                  style={{ 
                    height: `${heights[i]}%`,
                    animationDelay: `${i * 100}ms`
                  }}
                />
              );
            })}
          </div>
          {/* Chart legend */}
          <div className="flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <Skeleton className="h-3 w-3 rounded-full" />
                <Skeleton className="h-3 w-12" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TableSkeleton({ className, rows = 5, ...props }: React.HTMLAttributes<HTMLDivElement> & { rows?: number }) {
  return (
    <Card className={cn("relative overflow-hidden animate-scaleIn", className)} {...props}>
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <CardHeader>
        <Skeleton className="h-6 w-32 bg-muted/70" />
      </CardHeader>
      <CardContent>
        {/* Table header */}
        <div className="grid grid-cols-4 gap-4 pb-3 border-b">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full bg-muted/60" />
          ))}
        </div>
        {/* Table rows */}
        <div className="space-y-3 pt-3">
          {[...Array(rows)].map((_, i) => (
            <div 
              key={i} 
              className="grid grid-cols-4 gap-4 animate-fadeIn"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Skeleton className="h-4 w-full bg-muted/50" />
              <Skeleton className="h-4 w-3/4 bg-muted/50" />
              <Skeleton className="h-4 w-1/2 bg-muted/50" />
              <Skeleton className="h-4 w-2/3 bg-muted/50" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
