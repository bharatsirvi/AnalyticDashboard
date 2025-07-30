"use client"

import { useState, useMemo } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpDown, ChevronLeft, ChevronRight, Download, Search, X } from "lucide-react"
import { TableData } from "@/lib/data"
import { formatCurrency, formatNumber, cn } from "@/lib/utils"

interface DataTableProps {
  data: TableData[]
  title: string
  description?: string
}

type SortField = keyof TableData
type SortDirection = 'asc' | 'desc'

export function DataTable({ data, title, description }: DataTableProps) {
  const [sortField, setSortField] = useState<SortField>('campaign')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'paused' | 'completed'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  
  const itemsPerPage = 15

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const exportToCSV = () => {
    setIsExporting(true)
    
    // Simulate export delay
    setTimeout(() => {
      const csvHeaders = ['Campaign', 'Impressions', 'Clicks', 'Conversions', 'Spend', 'CTR', 'CPA', 'Status']
      const csvData = filteredAndSortedData.map(row => [
        row.campaign,
        row.impressions,
        row.clicks,
        row.conversions,
        row.spend,
        row.ctr,
        row.cpa,
        row.status
      ])
      
      const csvContent = [csvHeaders, ...csvData]
        .map(row => row.map(cell => `"${cell}"`).join(','))
        .join('\n')
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `campaign-data-${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setIsExporting(false)
    }, 1000)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setCurrentPage(1)
  }

  const filteredAndSortedData = useMemo(() => {
    let filtered = data
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.campaign.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(item => item.status === statusFilter)
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      const aValue = a[sortField]
      const bValue = b[sortField]
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
      }
      
      return 0
    })
  }, [data, sortField, sortDirection, statusFilter, searchQuery])

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAndSortedData, currentPage])

  const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const SortableHeader = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <TableHead 
      className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 border-b-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 font-semibold text-slate-700 dark:text-slate-300 group"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center space-x-2 py-1">
        <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{children}</span>
        <ArrowUpDown className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-200" />
      </div>
    </TableHead>
  )

  return (
    <Card className="animate-fadeIn shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 hover:shadow-2xl transition-all duration-500">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-slate-200 dark:border-slate-700">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="space-y-2">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></div>
              {title}
            </CardTitle>
            {description && <CardDescription className="text-base mt-1 text-slate-600 dark:text-slate-400">{description}</CardDescription>}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Live Data
              </span>
              <span>•</span>
              <span>{filteredAndSortedData.length} campaigns</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:flex-none sm:w-72">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-12 pr-12 py-3 text-sm border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-110"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as any)
                setCurrentPage(1)
              }}
              className="px-4 py-3 text-sm border-2 border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
            
            {/* Export Button */}
            <Button 
              variant="outline" 
              size="sm"
              onClick={exportToCSV}
              disabled={isExporting}
              className="px-6 py-3 border-2 border-blue-200 dark:border-blue-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <Download className={cn("h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200", isExporting && "animate-spin")} />
              {isExporting ? 'Exporting...' : 'Export CSV'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner bg-white dark:bg-slate-900">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="hover:bg-slate-50 dark:hover:bg-slate-800/50 border-none">
                  <SortableHeader field="campaign">Campaign</SortableHeader>
                  <SortableHeader field="impressions">Impressions</SortableHeader>
                  <SortableHeader field="clicks">Clicks</SortableHeader>
                  <SortableHeader field="conversions">Conversions</SortableHeader>
                  <SortableHeader field="spend">Spend</SortableHeader>
                  <SortableHeader field="ctr">CTR</SortableHeader>
                  <SortableHeader field="cpa">CPA</SortableHeader>
                  <SortableHeader field="status">Status</SortableHeader>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.length === 0 ? (
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={8} className="text-center py-12 text-muted-foreground">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                          <Search className="h-6 w-6 text-slate-400" />
                        </div>
                        <p className="text-lg font-medium">
                          {searchQuery ? 'No campaigns found matching your search.' : 'No data available.'}
                        </p>
                        {searchQuery && (
                          <Button variant="outline" size="sm" onClick={clearSearch} className="mt-2">
                            Clear search
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedData.map((row, index) => (
                    <TableRow 
                      key={row.id} 
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 transition-all duration-300 group border-b border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <TableCell className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                          <span>{row.campaign}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-slate-600 dark:text-slate-400 py-4">{formatNumber(row.impressions)}</TableCell>
                      <TableCell className="font-mono text-slate-600 dark:text-slate-400 py-4">{formatNumber(row.clicks)}</TableCell>
                      <TableCell className="font-mono font-bold text-emerald-600 dark:text-emerald-400 py-4">
                        <div className="flex items-center space-x-2">
                          <span>{row.conversions}</span>
                          <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono font-semibold text-slate-700 dark:text-slate-300 py-4">{formatCurrency(row.spend)}</TableCell>
                      <TableCell className="py-4">
                        <span className={cn(
                          "px-3 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all duration-200 hover:shadow-md",
                          row.ctr >= 3.0 ? "bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 dark:from-emerald-900 dark:to-green-900 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700" :
                          row.ctr >= 2.5 ? "bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 dark:from-amber-900 dark:to-yellow-900 dark:text-amber-200 border border-amber-200 dark:border-amber-700" :
                          "bg-gradient-to-r from-red-100 to-rose-100 text-red-800 dark:from-red-900 dark:to-rose-900 dark:text-red-200 border border-red-200 dark:border-red-700"
                        )}>
                          {row.ctr.toFixed(1)}%
                        </span>
                      </TableCell>
                      <TableCell className="font-mono text-slate-600 dark:text-slate-400 py-4">{formatCurrency(row.cpa)}</TableCell>
                      <TableCell className="py-4">
                        <Badge className={cn(
                          "capitalize font-semibold px-3 py-1.5 rounded-full shadow-sm transition-all duration-200 hover:shadow-md border", 
                          getStatusColor(row.status)
                        )}>
                          <div className="flex items-center space-x-2">
                            <div className={cn(
                              "w-2 h-2 rounded-full", 
                              row.status === 'active' ? "bg-green-500 animate-pulse" :
                              row.status === 'paused' ? "bg-yellow-500" : "bg-blue-500"
                            )}></div>
                            <span>{row.status}</span>
                          </div>
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Enhanced Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 px-8 py-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-t-2 border-slate-200 dark:border-slate-700">
          <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>
              Showing <span className="font-bold text-blue-600 dark:text-blue-400">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
              <span className="font-bold text-blue-600 dark:text-blue-400">{Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)}</span> of{' '}
              <span className="font-bold text-blue-600 dark:text-blue-400">{filteredAndSortedData.length}</span> campaigns
            </span>
            {searchQuery && (
              <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-700">
                Filtered by: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page = i + 1
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={cn(
                      "w-10 h-10 rounded-xl border-2 transition-all duration-300 font-semibold",
                      currentPage === page 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 border-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105" 
                        : "border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500"
                    )}
                  >
                    {page}
                  </Button>
                )
              })}
              {totalPages > 5 && (
                <>
                  <span className="text-slate-400 dark:text-slate-500 mx-2">...</span>
                  <Button
                    variant={currentPage === totalPages ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(totalPages)}
                    className={cn(
                      "w-10 h-10 rounded-xl border-2 transition-all duration-300 font-semibold",
                      currentPage === totalPages 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 border-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105" 
                        : "border-slate-300 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500"
                    )}
                  >
                    {totalPages}
                  </Button>
                </>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border-2 border-slate-300 dark:border-slate-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1 group-hover:scale-110 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
