"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, ArrowUpRight, Copy, Check, Terminal } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const [copied, setCopied] = useState(false)
    const email = "arjundevjha111@gmail.com"

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <footer id="contact" className="py-16 sm:py-24 bg-[#08090A] relative overflow-hidden bg-grid-tech">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Index */}
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            06
                        </span>
                        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Connect & Collaborate
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#7E8492]">
                        CONTACT // TERMINAL
                    </span>
                </div>

                {/* Main Contact Container */}
                <div className="bg-[#0F1115] border border-[#1E222B] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative">
                    <div className="max-w-2xl space-y-4 sm:space-y-6">
                        {/* Live Status Pill */}
                        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-[#14171F] border border-[#1E222B] font-mono text-[11px] sm:text-xs text-[#8A8F98]">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse shrink-0"></span>
                            <span className="text-[#F2F2F0]">Available for Hackathons, Research & Builds</span>
                        </div>

                        <h3 className="text-2xl xs:text-3xl sm:text-5xl font-black text-[#F2F2F0] tracking-tight">
                            Let&apos;s build something <br />
                            <span className="text-primary">extraordinary.</span>
                        </h3>

                        <p className="text-xs sm:text-base text-[#8A8F98] leading-relaxed">
                            Always eager to collaborate on competitive programming, AI agents, security audits, or applied engineering projects.
                        </p>

                        {/* Direct Channel Actions Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 sm:pt-4">
                            <a
                                href={`mailto:${email}`}
                                className="min-h-[48px] inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] active:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <div className="flex items-center gap-2 min-w-0">
                                    <Mail className="w-4 h-4 text-primary shrink-0" />
                                    <span className="truncate max-w-[200px] xs:max-w-[260px] sm:max-w-none">{email}</span>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] shrink-0" />
                            </a>

                            <Link
                                href="https://github.com/Arjundevjha"
                                target="_blank"
                                className="min-h-[48px] inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] active:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <div className="flex items-center gap-2">
                                    <Github className="w-4 h-4 text-primary shrink-0" />
                                    <span>github.com/Arjundevjha</span>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] shrink-0" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/arjun-dev-jha/"
                                target="_blank"
                                className="min-h-[48px] inline-flex items-center justify-between sm:justify-start gap-2.5 px-4 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] active:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <div className="flex items-center gap-2">
                                    <Linkedin className="w-4 h-4 text-primary shrink-0" />
                                    <span>LinkedIn Profile</span>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] shrink-0" />
                            </Link>

                            <button
                                onClick={handleCopyEmail}
                                className="min-h-[48px] inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-[#08090A] font-semibold text-xs hover:bg-primary/90 active:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1E222B]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left font-mono text-[11px] sm:text-xs text-[#7E8492]">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5 text-primary shrink-0" />
                            <span>ARJUN DEV JHA · SINGAPORE (UTC+8)</span>
                        </div>
                        <div>
                            DESIGNED FOR ARJUN&apos;S ENGINEERING LAB · {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
