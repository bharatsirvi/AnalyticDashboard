"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  BarChart3, 
  Bell, 
  Menu, 
  Settings, 
  User,
  Sparkles
} from "lucide-react"

interface HeaderProps {
  // Clean interface without search props
}

export function Header({}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 shadow-lg shadow-slate-200/20 dark:shadow-slate-900/20">
      <div className="container flex h-20 items-center justify-between px-6">
        {/* Enhanced Logo and Brand */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-all duration-300 rounded-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <BarChart3 className="h-7 w-7 text-white" />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ADmyBRAND
              </h1>
              <p className="text-sm text-muted-foreground font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Insights Dashboard
              </p>
            </div>
          </div>
        </div>

        {/* Clean Center Space */}
        <div className="hidden md:flex flex-1 max-w-lg mx-8 justify-center">
          {/* Keep this space clean and minimal */}
        </div>

        {/* Enhanced Actions */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 relative rounded-xl p-2.5"
          >
            <Bell className="h-5 w-5 text-slate-600 dark:text-slate-300" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse shadow-lg"></span>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 rounded-xl p-2.5"
          >
            <Settings className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          </Button>
          <div>
            <ThemeToggle />
          </div>
          <div className="w-px h-6 bg-slate-300 dark:bg-slate-600 mx-2" />
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 rounded-xl p-2.5"
          >
            <User className="h-5 w-5 text-slate-600 dark:text-slate-300" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm">
          <div className="container py-6 px-6">
            {/* Simple Mobile Navigation */}
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start h-12 text-left">
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-left">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
