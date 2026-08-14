"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Shield, Cpu, Code2 } from "lucide-react"
import Link from "next/link"

const domains = [
    { label: "Software Systems", icon: Code2 },
    { label: "Generative AI", icon: Sparkles },
    { label: "Cybersecurity", icon: Shield },
    { label: "Robotics & Hardware", icon: Cpu },
]

export function Hero() {
    return (
        <section id="home" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-grid-tech">
            {/* Subtle engineering coordinate marks */}
            <div className="absolute top-24 left-8 hidden lg:flex items-center gap-2 font-mono text-[10px] text-[#555B66] tracking-widest uppercase select-none">
                <span className="text-primary font-bold">●</span>
                <span>SYS_COORD: 1.3521° N, 103.8198° E</span>
                <span>//</span>
                <span>SINGAPORE</span>
            </div>

            <div className="absolute top-24 right-8 hidden lg:flex items-center gap-2 font-mono text-[10px] text-[#555B66] tracking-widest uppercase select-none">
                <span>STAGE: JC1 (ASRJC)</span>
                <span>//</span>
                <span className="text-[#8A8F98]">BUILDING SINCE AGE 7</span>
            </div>

            <div className="container px-4 mx-auto max-w-5xl relative z-10">
                {/* Monospace Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#8A8F98]">
                        <Terminal className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[#F2F2F0] font-medium">ARJUN DEV JHA</span>
                        <span className="text-[#555B66]">/</span>
                        <span className="text-primary">STUDENT ENGINEER</span>
                    </div>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#F2F2F0] leading-[1.08] max-w-4xl">
                        I build things that <br className="hidden sm:inline" />
                        make me <span className="text-primary">curious.</span>
                    </h1>
                </motion.div>

                {/* Core Domains */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2 sm:gap-3 mb-8"
                >
                    {domains.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F1115] border border-[#1E222B] text-xs font-mono text-[#8A8F98] hover:text-[#F2F2F0] hover:border-primary/40 transition-colors"
                            >
                                <Icon className="w-3.5 h-3.5 text-primary" />
                                <span>{item.label}</span>
                            </div>
                        )
                    })}
                </motion.div>

                {/* Subtext Narrative */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-base sm:text-lg text-[#8A8F98] max-w-2xl leading-relaxed mb-10"
                >
                    JC1 student at Anderson Serangoon Junior College. Exploring intelligent agentic systems, applied cybersecurity, algorithmic robotics, and full-stack software.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <Link
                        href="#work"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-[#08090A] font-semibold text-sm hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(183,255,60,0.35)] transition-all duration-200"
                    >
                        <span>Explore Selected Work</span>
                        <ArrowDown className="w-4 h-4" />
                    </Link>

                    <Link
                        href="https://github.com/Arjundevjha"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F1115] hover:bg-[#14171F] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] text-sm font-mono transition-all duration-200"
                    >
                        <span>GitHub Archive</span>
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Section Index Marker */}
            <div className="container px-4 mx-auto max-w-5xl mt-16 pt-8 border-t border-[#1E222B]/60 flex items-center justify-between font-mono text-xs text-[#555B66]">
                <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">01</span>
                    <span>//</span>
                    <span className="text-[#8A8F98]">PORTFOLIO_V2.0</span>
                </div>
                <div>SCROLL TO INSPECT ↓</div>
            </div>
        </section>
    )
}
