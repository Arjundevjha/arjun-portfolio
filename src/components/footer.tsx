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
        <footer id="contact" className="py-24 bg-[#08090A] relative overflow-hidden bg-grid-tech">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Index */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            07
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Connect & Collaborate
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#7E8492]">
                        CONTACT // TERMINAL
                    </span>
                </div>

                {/* Main Contact Container */}
                <div className="bg-[#0F1115] border border-[#1E222B] rounded-3xl p-8 sm:p-12 relative">
                    <div className="max-w-2xl space-y-6">
                        {/* Live Status Pill */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#8A8F98]">
                            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[#F2F2F0]">Available for Hackathons, Research & Builds</span>
                        </div>

                        <h3 className="text-3xl sm:text-5xl font-black text-[#F2F2F0] tracking-tight">
                            Let&apos;s build something <br />
                            <span className="text-primary">extraordinary.</span>
                        </h3>

                        <p className="text-sm sm:text-base text-[#8A8F98] leading-relaxed">
                            Always eager to collaborate on competitive programming, AI agents, security audits, or applied engineering projects.
                        </p>

                        {/* Direct Channel Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-4">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <Mail className="w-4 h-4 text-primary" />
                                <span>{email}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98]" />
                            </a>

                            <Link
                                href="https://github.com/Arjundevjha"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <Github className="w-4 h-4 text-primary" />
                                <span>github.com/Arjundevjha</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98]" />
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/arjun-dev-jha/"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/50 text-[#F2F2F0] font-mono text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                <Linkedin className="w-4 h-4 text-primary" />
                                <span>LinkedIn Profile</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98]" />
                            </Link>

                            <button
                                onClick={handleCopyEmail}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-[#08090A] font-semibold text-xs hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="mt-12 pt-8 border-t border-[#1E222B]/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7E8492]">
                        <div className="flex items-center gap-2">
                            <Terminal className="w-3.5 h-3.5 text-primary" />
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
