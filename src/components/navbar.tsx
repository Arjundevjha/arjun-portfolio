"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowUpRight, Terminal, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const [activeSegment, setActiveSegment] = React.useState("home")
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const isClickScrolling = React.useRef(false)
    const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    // Clear legacy hash and ensure reloads always start at top of home page
    React.useEffect(() => {
        if (typeof window !== "undefined") {
            if ("scrollRestoration" in window.history) {
                window.history.scrollRestoration = "manual"
            }
            if (window.location.hash) {
                window.history.replaceState(null, "", window.location.pathname)
                window.scrollTo({ top: 0, left: 0, behavior: "instant" })
            }
        }
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setMobileOpen(false)
        const targetId = href.replace("#", "")
        const element = document.getElementById(targetId)
        if (element) {
            // Lock scroll-spy listener during smooth panning to prevent highlight flickering
            isClickScrolling.current = true
            setActiveSegment(targetId)
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

            element.scrollIntoView({ behavior: "smooth" })

            scrollTimeoutRef.current = setTimeout(() => {
                isClickScrolling.current = false
            }, 850)
        }
    }

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        setMobileOpen(false)
        isClickScrolling.current = true
        setActiveSegment("home")
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

        window.scrollTo({ top: 0, behavior: "smooth" })

        scrollTimeoutRef.current = setTimeout(() => {
            isClickScrolling.current = false
        }, 850)
    }

    React.useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [mobileOpen])

    React.useEffect(() => {
        let ticking = false

        const updateActiveSection = () => {
            setIsScrolled(window.scrollY > 30)

            // If user clicked a navigation link, let the target lock stay active
            if (isClickScrolling.current) {
                ticking = false
                return
            }

            const scrollPosition = window.innerHeight + window.scrollY
            const documentHeight = document.documentElement.scrollHeight
            
            // Check if at the bottom of the page
            if (scrollPosition >= documentHeight - 70) {
                setActiveSegment("contact")
                ticking = false
                return
            }

            // Check if at the top of the page
            if (window.scrollY < 150) {
                setActiveSegment("home")
                ticking = false
                return
            }

            const navOffset = 90 // Space occupied by floating navbar
            const viewportHeight = window.innerHeight

            let maxCoverage = 0
            let dominantSection = ""

            for (const item of navItems) {
                const sectionId = item.href.replace("#", "")
                const element = document.getElementById(sectionId)
                if (!element) continue

                const rect = element.getBoundingClientRect()
                const visibleTop = Math.max(navOffset, rect.top)
                const visibleBottom = Math.min(viewportHeight, rect.bottom)
                const visibleHeight = Math.max(0, visibleBottom - visibleTop)

                if (visibleHeight > maxCoverage) {
                    maxCoverage = visibleHeight
                    dominantSection = sectionId
                }
            }

            if (dominantSection) {
                setActiveSegment(dominantSection)
            }
            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveSection)
                ticking = true
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        updateActiveSection()
        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
        }
    }, [])

    return (
        <>
            {/* Mobile Backdrop Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setMobileOpen(false)}
                        className="fixed inset-0 bg-[#08090A]/85 backdrop-blur-md z-40 md:hidden pointer-events-auto"
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>

            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 pointer-events-none">
                <div
                    className={cn(
                        "w-full max-w-5xl transition-all duration-300 pointer-events-auto flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full border",
                        isScrolled
                            ? "bg-[#08090A]/90 backdrop-blur-md border-[#1E222B] shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                            : "bg-[#08090A]/50 backdrop-blur-sm border-white/10"
                    )}
                >
                    {/* Logo & Identity */}
                    <Link
                        href="#home"
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 group font-mono text-sm tracking-tight text-[#F2F2F0] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="font-bold tracking-wider text-xs sm:text-sm">ARJUN</span>
                        <span className="hidden xs:inline-block text-[10px] font-mono text-[#8A8F98] bg-[#14171F] px-2 py-0.5 rounded border border-[#1E222B]">
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
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={cn(
                                        "px-3 py-1 text-xs font-mono tracking-wide rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                        isActive
                                            ? "text-primary bg-primary/10 font-semibold border border-primary/20"
                                            : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Right Action (Desktop) */}
                    <div className="hidden sm:flex items-center gap-3">
                        <Link
                            href="https://github.com/Arjundevjha"
                            target="_blank"
                            className="inline-flex items-center gap-1 text-xs font-mono text-[#8A8F98] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg py-1 px-2"
                        >
                            <span>GitHub</span>
                            <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button (44px min tap area) */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden h-10 w-10 flex items-center justify-center rounded-full text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Animated Dropdown Drawer */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="md:hidden absolute top-[68px] left-3 right-3 sm:left-4 sm:right-4 bg-[#0F1115]/95 backdrop-blur-2xl border border-[#1E222B] rounded-2xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-auto flex flex-col gap-1 z-50 max-h-[calc(100dvh-5.5rem)] overflow-y-auto"
                        >
                            <div className="px-3 py-1.5 font-mono text-[10px] text-[#7E8492] uppercase tracking-widest border-b border-[#1E222B]/60 mb-1 flex items-center justify-between">
                                <span>PORTFOLIO DIRECTORY</span>
                                <span className="text-primary">v2.0</span>
                            </div>

                            {navItems.map((item) => {
                                const isActive = activeSegment === item.href.substring(1)
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className={cn(
                                            "min-h-[44px] px-3.5 py-2.5 text-sm font-mono rounded-xl transition-all flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                                            isActive
                                                ? "bg-primary/10 text-primary font-semibold border border-primary/30 shadow-sm"
                                                : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5 active:bg-white/10"
                                        )}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <span className={cn(
                                                "w-1.5 h-1.5 rounded-full transition-colors",
                                                isActive ? "bg-primary" : "bg-[#1E222B]"
                                            )} />
                                            <span>{item.name}</span>
                                        </div>
                                        {isActive ? (
                                            <span className="text-[10px] text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                                                ACTIVE
                                            </span>
                                        ) : (
                                            <ChevronRight className="w-4 h-4 text-[#7E8492]" />
                                        )}
                                    </Link>
                                )
                            })}

                            <div className="pt-2 mt-1 border-t border-[#1E222B] flex items-center justify-between px-1">
                                <Link
                                    href="https://github.com/Arjundevjha"
                                    target="_blank"
                                    onClick={() => setMobileOpen(false)}
                                    className="min-h-[40px] text-xs font-mono text-[#8A8F98] hover:text-primary flex items-center gap-2 py-1 px-2.5 rounded-lg hover:bg-white/5 transition-colors w-full justify-between"
                                >
                                    <div className="flex items-center gap-2">
                                        <Terminal className="w-3.5 h-3.5 text-primary" />
                                        <span>github.com/Arjundevjha</span>
                                    </div>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    )
}

