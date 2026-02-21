"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [activeSegment, setActiveSegment] = React.useState("home")
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = navItems.map(item => item.href.substring(1))
            let current = "home"
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element && window.scrollY >= (element.offsetTop - 150)) {
                    current = section
                }
            }
            setActiveSegment(current)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        // Initial check
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b",
            isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent border-transparent"
        )}>
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="#home" className="text-xl md:text-2xl font-bold tracking-tighter text-primary">
                    Arjun.
                </Link>
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSegment === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                {/* Mobile menu could be expanded here */}
            </div>
        </header>
    )
}
