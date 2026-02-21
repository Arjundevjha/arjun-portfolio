"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const taglines = [
    "Robotics Engineer",
    "Full Stack Developer",
    "Cybersecurity Researcher",
    "AI Builder"
]

export function Hero() {
    const [currentTagline, setCurrentTagline] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-30 blur-[100px]"></div>

            <div className="container px-4 z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-foreground">
                        Arjun Dev Jha
                    </h1>
                </motion.div>

                <div className="h-12 md:h-16 mb-6 flex items-center">
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={currentTagline}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent"
                        >
                            {taglines[currentTagline]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                <motion.p
                    className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Student passionate about Infocomm, Robotics and AI. Building real-world tech since age 7.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Button asChild size="lg" className="rounded-full px-8 text-primary-foreground font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
                        <Link href="#projects">View Projects</Link>
                    </Button>
                    <div className="flex items-center gap-4">
                        <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground hover:text-primary transition-colors">
                            <Link href="https://github.com/Arjundevjha" target="_blank">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground hover:text-primary transition-colors">
                            <Link href="https://www.linkedin.com/in/arjun-dev-jha/" target="_blank">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to about section">
                    <ChevronDown className="h-8 w-8" />
                </Link>
            </motion.div>
        </section>
    )
}
