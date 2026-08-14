"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react"

const navItems = [
    { name: "Now", href: "#now" },
    { name: "Work", href: "#work" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Experience", href: "#experience" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [activeSegment, setActiveSegment] = React.useState("now")
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)

            const sections = navItems.map((item) => item.href.substring(1))
            let current = ""
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element && window.scrollY >= element.offsetTop - 200) {
                    current = section
                }
            }
            if (current) setActiveSegment(current)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
            <div
                className={cn(
                    "w-full max-w-5xl transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full border",
                    isScrolled
                        ? "bg-[#08090A]/85 backdrop-blur-md border-[#1E222B] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                        : "bg-[#08090A]/40 backdrop-blur-sm border-white/5"
                )}
            >
                {/* Logo & Identity */}
                <Link
                    href="#home"
                    className="flex items-center gap-2 group font-mono text-sm tracking-tight text-[#F2F2F0] hover:text-primary transition-colors"
                >
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="font-bold tracking-wider">ARJUN</span>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-[#8A8F98] bg-[#14171F] px-2 py-0.5 rounded border border-[#1E222B]">
                        JC1 · LAB
                    </span>
                </Link>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex items-center gap-1 sm:gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSegment === item.href.substring(1)
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-3 py-1 text-xs font-mono tracking-wide rounded-full transition-all duration-200",
                                    isActive
                                        ? "text-primary bg-primary/10 font-semibold"
                                        : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Right Action */}
                <div className="hidden sm:flex items-center gap-3">
                    <Link
                        href="https://github.com/Arjundevjha"
                        target="_blank"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#8A8F98] hover:text-primary transition-colors"
                    >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-1.5 rounded-lg text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5 transition-colors"
                    aria-label="Toggle navigation menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileOpen && (
                <div className="md:hidden absolute top-16 left-4 right-4 bg-[#08090A]/95 backdrop-blur-xl border border-[#1E222B] rounded-2xl p-4 shadow-2xl pointer-events-auto flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSegment === item.href.substring(1)
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={cn(
                                    "px-4 py-2 text-sm font-mono rounded-lg transition-colors flex items-center justify-between",
                                    isActive
                                        ? "bg-primary/10 text-primary font-semibold"
                                        : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5"
                                )}
                            >
                                <span>{item.name}</span>
                                {isActive && <span className="text-[10px] text-primary">CURRENT</span>}
                            </Link>
                        )
                    })}
                    <div className="pt-2 border-t border-[#1E222B] flex items-center justify-between px-4">
                        <Link
                            href="https://github.com/Arjundevjha"
                            target="_blank"
                            className="text-xs font-mono text-[#8A8F98] hover:text-primary flex items-center gap-1"
                        >
                            <Terminal className="w-3.5 h-3.5" />
                            <span>github.com/Arjundevjha</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
