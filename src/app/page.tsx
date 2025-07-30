"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { MetricCardComponent } from "@/components/metric-card"
import { LineChartComponent, BarChartComponent, PieChartComponent } from "@/components/charts"
import { DataTable } from "@/components/data-table"
import { generateMockData, Analytics } from "@/lib/data"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const [data, setData] = useState<Analytics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Simulate data loading with beautiful skeleton display
  useEffect(() => {
    const loadData = () => {
      setIsLoading(true)
      setTimeout(() => {
        setData(generateMockData())
        setLastUpdated(new Date())
        setIsLoading(false)
      }, 2000) // 2 seconds to show beautiful loading skeletons
    }

    loadData()
  }, [])

  // Auto-refresh data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        setData(generateMockData())
        setLastUpdated(new Date())
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [data])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setData(generateMockData())
      setLastUpdated(new Date())
      setIsRefreshing(false)
    }, 1000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto p-6 space-y-8">
          {/* Header Skeleton with beautiful shimmer effect */}
          <div className="flex flex-col space-y-4 animate-fadeIn">
            <div className="relative overflow-hidden rounded-md bg-muted h-8 w-64">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
            <div className="relative overflow-hidden rounded-md bg-muted h-4 w-96">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
          
          {/* Enhanced Metric Cards with beautiful loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="bg-white dark:bg-slate-800 rounded-lg border p-6 relative overflow-hidden animate-fadeIn shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="flex justify-between items-center mb-4">
                  <div className="h-4 w-32 bg-muted/60 rounded animate-pulse" />
                  <div className="h-10 w-10 rounded-lg bg-primary/10 animate-pulse" />
                </div>
                <div className="h-8 w-24 mb-3 bg-muted/80 rounded animate-pulse" />
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-200 animate-pulse" />
                  <div className="h-3 w-16 bg-muted/60 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Chart Skeletons */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(2)].map((_, chartIndex) => (
              <div 
                key={chartIndex}
                className="bg-white dark:bg-slate-800 rounded-lg border p-6 relative overflow-hidden animate-slideIn shadow-md"
                style={{ animationDelay: `${(chartIndex + 1) * 100}ms` }}
              >
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="h-6 w-32 bg-muted/70 rounded mb-4 animate-pulse" />
                <div className="flex items-end justify-between h-40 space-x-2">
                  {[...Array(8)].map((_, i) => {
                    // Use deterministic heights to avoid hydration mismatches
                    const heights = [65, 45, 85, 70, 90, 55, 40, 80];
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
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg border p-6 relative overflow-hidden animate-slideIn shadow-md" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="h-6 w-32 bg-muted/70 rounded mb-4 animate-pulse" />
              <div className="h-48 w-full bg-muted/40 rounded animate-pulse" />
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg border p-6 relative overflow-hidden animate-scaleIn shadow-md" style={{ animationDelay: '400ms' }}>
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="h-6 w-32 bg-muted rounded mb-4 animate-pulse" />
              <div className="space-y-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center animate-fadeIn" style={{ animationDelay: `${(i + 5) * 100}ms` }}>
                    <div className="h-4 w-32 bg-muted rounded animate-pulse" />
                    <div className="h-4 w-16 bg-muted rounded animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Table Skeleton */}
          <div className="bg-white dark:bg-slate-800 rounded-lg border p-6 relative overflow-hidden animate-scaleIn shadow-md" style={{ animationDelay: '500ms' }}>
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="h-6 w-32 bg-muted/70 rounded mb-4 animate-pulse" />
            <div className="grid grid-cols-4 gap-4 pb-3 border-b">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 w-full bg-muted/60 rounded animate-pulse" />
              ))}
            </div>
            <div className="space-y-3 pt-3">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="grid grid-cols-4 gap-4 animate-fadeIn"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="h-4 w-full bg-muted/50 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-muted/50 rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-muted/50 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-muted/50 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center py-8">
            <div className="inline-flex items-center space-x-2 text-muted-foreground animate-pulse">
              <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
              <span className="text-sm">Loading beautiful analytics dashboard...</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800">
      <Header />
      <main className="container mx-auto px-6 py-8 space-y-8 relative z-10">

        {/* Enhanced Action Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border shadow-sm p-6 animate-slideIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Left Section - Controls */}
            <div className="flex items-center space-x-4">
              {/* Enhanced Refresh Button */}
              <div className="flex items-center space-x-3">
                <Button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className={`
                    relative overflow-hidden transition-all duration-300 
                    ${isRefreshing 
                      ? 'bg-blue-500 hover:bg-blue-600 scale-105 shadow-lg shadow-blue-500/25' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'
                    }
                    text-white border-0 px-6 py-2 rounded-lg font-medium
                  `}
                >
                  {isRefreshing && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}
                  <RefreshCw className={`h-4 w-4 mr-2 transition-transform duration-300 ${isRefreshing ? 'animate-spin' : 'hover:rotate-180'}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh Data'}
                </Button>

                {/* Auto-refresh Indicator */}
                <div className="flex items-center space-x-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-700 dark:text-green-400">
                    Auto-refresh: 30s
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section - Status */}
            <div className="flex items-center space-x-4">
              {/* Data Status */}
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Live Data
                </span>
              </div>

              {/* Last Updated */}
              {lastUpdated && (
                <div className="text-right">
                  <p className="text-xs text-muted-foreground font-medium">Last Updated</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {lastUpdated.toLocaleTimeString()}
                  </p>
                </div>
              )}

              {/* Data Count Badge */}
              <div className="px-3 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                  {data?.campaignData.length || 0} Campaigns
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar for Refresh */}
          {isRefreshing && (
            <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" 
                   style={{ animation: 'loadingBar 1s ease-in-out' }} />
            </div>
          )}
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.overview.slice(0, 4).map((metric, i) => (
            <MetricCardComponent
              key={i}
              metric={metric}
              className={`${
                i === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800' :
                i === 1 ? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800' :
                i === 2 ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800' :
                'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800'
              }`}
            />
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChartComponent 
            title="Revenue Trend" 
            description="Monthly revenue performance"
            data={data?.revenueChart.labels.map((label, index) => ({
              name: label,
              value: data.revenueChart.datasets[0].data[index]
            })) || []} 
          />
          <BarChartComponent 
            title="Conversion Rate" 
            description="Monthly conversion tracking"
            data={data?.conversionChart.labels.map((label, index) => ({
              name: label,
              value: data.conversionChart.datasets[0].data[index]
            })) || []} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PieChartComponent 
            title="Channel Performance" 
            description="Traffic source breakdown"
            data={data?.channelChart.labels.map((label, index) => ({
              name: label,
              value: data.channelChart.datasets[0].data[index]
            })) || []} 
          />
          
          {/* Enhanced Analytics Overview Card */}
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse" />
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Analytics Overview</h3>
              </div>
              <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium rounded-full">
                Real-time
              </div>
            </div>
            
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Total Campaigns</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">
                      {data?.campaignData.length || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-md" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Active Now</p>
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                      {data?.campaignData.filter(c => c.status === 'active').length || 0}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-emerald-500 rounded-md animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Total Investment</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">
                      ${(data?.campaignData.reduce((sum, c) => sum + c.spend, 0) || 0).toLocaleString()}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-md" />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Avg. Performance</p>
                    <p className="text-2xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                      {((data?.campaignData.reduce((sum, c) => sum + c.ctr, 0) || 0) / (data?.campaignData.length || 1)).toFixed(2)}%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-300">Best Performing Channel</span>
                </div>
                <span className="text-sm font-bold text-green-700 dark:text-green-400">
                  {data?.channelChart.labels[0] || 'N/A'}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-blue-800 dark:text-blue-300">Campaign Success Rate</span>
                </div>
                <span className="text-sm font-bold text-blue-700 dark:text-blue-400">
                  {(((data?.campaignData.filter(c => c.status === 'active').length || 0) / (data?.campaignData.length || 1)) * 100).toFixed(1)}%
                </span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-purple-800 dark:text-purple-300">Avg. Cost Per Acquisition</span>
                </div>
                <span className="text-sm font-bold text-purple-700 dark:text-purple-400">
                  ${((data?.campaignData.reduce((sum, c) => sum + c.cpa, 0) || 0) / (data?.campaignData.length || 1)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <DataTable
          title="Campaign Performance"
          data={data?.campaignData || []}
        />
      </main>
    </div>
  )
}
