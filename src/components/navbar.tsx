'use client'

import Link from "next/link"
import logo from '@public/logo/logo.svg'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, User } from "lucide-react"
import Image from "next/image"
import { ModeToggle } from "@/theme/toggle-theme"

export function Navbar() {
  return (
    <nav className="container mx-auto flex items-center shadow-sm justify-between py-4 bg-background">
       
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Logo"
              className="size-9"
            />
            <span className="text-xl font-bold">Funtrail</span>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="default">Join Us</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/login" className="w-full">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register" className="w-full">Register</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/join-us" className="w-full">Join Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/login" className="w-full">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/register" className="w-full">Register</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}