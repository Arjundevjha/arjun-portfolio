"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, ShieldCheck, BrainCircuit, CheckCircle, Quote } from "lucide-react"

const experiences = [
    {
        date: "05.2025",
        role: "AI Application Developer",
        organization: "Analytics Resource",
        icon: BrainCircuit,
        headline: "Production GenAI Event Chatbot",
        scope: "Engineered and deployed a full-stack conversational AI agent for high-traffic school symposium event enquiry workflows in partnership with teammate Aarav Rastogi.",
        stack: ["React", "Google Gemini API", "Node.js", "Express", "Production Deployment"],
        outcomes: [
            "Full codebase audited and approved by Director Neena Bhalla",
            "Deployed to live production handling real-time participant queries",
            "Zero-downtime event lifecycle support",
        ],
        reference: "Reference: Neena Bhalla, Director",
    },
    {
        date: "03.2023",
        role: "Security Pentesting Researcher",
        organization: "Baskit.app",
        icon: ShieldCheck,
        headline: "E-Commerce Web Penetration Assessment",
        scope: "Performed comprehensive black-box and grey-box security penetration testing across web application endpoints, session tokens, and input validation layers.",
        stack: ["Web Pentesting", "Vulnerability Assessment", "Payload Testing", "OWASP"],
        outcomes: [
            "Discovered critical input boundary vulnerabilities",
            "Authored full technical remediation audit report",
            "Provided actionable engineering patch recommendations",
        ],
        reference: "Reference: Yann B. Schuermans, Founder",
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-16 sm:py-24 border-b border-[#1E222B]/60 scroll-mt-20 relative">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            04
                        </span>
                        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Industry Experience
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#7E8492]">
                        INDUSTRY // VERIFIED ROLES
                    </span>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {experiences.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-2xl p-5 sm:p-8 flex flex-col justify-between transition-colors group"
                            >
                                <div className="space-y-3.5 sm:space-y-4">
                                    <div className="flex items-center justify-between gap-2 flex-wrap xs:flex-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 rounded-lg bg-[#14171F] border border-[#1E222B] text-primary shrink-0">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                            <div>
                                                <span className="font-mono text-xs text-[#8A8F98] flex items-center gap-1">
                                                    <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span>{item.organization}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="font-mono text-[11px] sm:text-xs text-[#8A8F98] bg-[#14171F] px-2.5 py-1 rounded-md border border-[#1E222B] flex items-center gap-1 shrink-0">
                                            <Calendar className="w-3 h-3 text-primary shrink-0" />
                                            <span>{item.date}</span>
                                        </span>
                                    </div>

                                    <div>
                                        <div className="font-mono text-[10px] text-primary uppercase tracking-wider mb-1 font-bold">
                                            ROLE: {item.role}
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#F2F2F0] group-hover:text-primary transition-colors">
                                            {item.headline}
                                        </h3>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#8A8F98] leading-relaxed">
                                        {item.scope}
                                    </p>

                                    {/* Stack */}
                                    <div className="flex flex-wrap gap-1.5 pt-1 sm:pt-2">
                                        {item.stack.map((s) => (
                                            <span
                                                key={s}
                                                className="px-2 py-0.5 rounded bg-[#14171F] border border-[#1E222B] text-[11px] font-mono text-[#8A8F98]"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Outcomes */}
                                    <div className="space-y-1.5 pt-2">
                                        <div className="font-mono text-[10px] text-[#7E8492] uppercase tracking-wider">
                                            Key Outcomes & Deliverables:
                                        </div>
                                        {item.outcomes.map((outcome, oIdx) => (
                                            <div
                                                key={oIdx}
                                                className="flex items-start gap-2 text-xs text-[#F2F2F0]/85 font-mono"
                                            >
                                                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                                <span>{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#1E222B]/60 font-mono text-[11px] sm:text-xs text-[#8A8F98]">
                                    {item.reference}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Integrated Mentor Feedback Quote */}
                <div className="bg-[#0F1115]/60 border border-[#1E222B] rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0 mt-1 opacity-80" />
                        <div>
                            <blockquote className="text-xs sm:text-base text-[#F2F2F0] italic font-medium leading-relaxed mb-2">
                                &quot;Keen to acquire new knowledge, does not hesitate to seek clarification. Possesses great depth of mathematical & technical thinking which he proactively shares with peers.&quot;
                            </blockquote>
                            <div className="font-mono text-[11px] sm:text-xs text-[#8A8F98]">
                                — Secondary School Academic & CCA Mentors Feedback (2022–2025)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
