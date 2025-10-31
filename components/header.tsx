"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Sam C
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span className={`h-0.5 w-full bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="#about" className="block text-foreground/70 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="block text-foreground/70 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="block text-foreground/70 hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="block text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
