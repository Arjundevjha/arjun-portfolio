"use client"

import { motion } from "framer-motion"
import { Code, Sparkles, Shield, Cpu, Terminal, Layers } from "lucide-react"

const capabilities = [
    {
        number: "01",
        domain: "Software & Systems",
        icon: Code,
        summary: "Full-stack architectures, modern web runtimes, and persistent backend systems.",
        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Python",
            "TypeScript",
            "REST APIs",
            "SQL & Databases",
            "Git & CI/CD",
        ],
    },
    {
        number: "02",
        domain: "Artificial Intelligence",
        icon: Sparkles,
        summary: "Autonomous agentic reasoning, multimodal LLM pipelines, and predictive machine learning models.",
        technologies: [
            "Google Gemini API",
            "Agentic AI Workflows",
            "Prompt Engineering",
            "Scikit-Learn",
            "Data Analytics",
            "Model Fine-Tuning",
        ],
    },
    {
        number: "03",
        domain: "Cybersecurity & Pentesting",
        icon: Shield,
        summary: "Web vulnerability discovery, payload construction, threat surface evaluation, and cryptography.",
        technologies: [
            "Web Penetration Testing",
            "Vulnerability Assessment",
            "Sentinel CTF (2nd Runner-Up)",
            "Classical & Modern Crypto",
            "Shell & Python Payloads",
            "OWASP Top 10",
            "IIT Jodhpur Certifications",
        ],
    },
    {
        number: "04",
        domain: "Robotics & Algorithmic Design",
        icon: Cpu,
        summary: "Autonomous hardware logic, sensory feedback integration, and competition mission engineering.",
        technologies: [
            "LEGO EV3 & Spike Prime",
            "Algorithmic Thinking",
            "Autonomous Navigation",
            "World Robot Games (Top 16)",
            "Hardware Prototyping",
            "Logic Optimization",
        ],
    },
]

export function Capabilities() {
    return (
        <section id="capabilities" className="py-16 sm:py-24 border-b border-[#1E222B]/60 relative">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            03
                        </span>
                        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Engineering Capabilities
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#7E8492]">
                        DOMAINS // 04 AREAS
                    </span>
                </div>

                {/* 4 Structured Capability Blocks */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {capabilities.map((item, idx) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-colors group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                                        <div className="flex items-center gap-2 sm:gap-2.5">
                                            <div className="p-2 sm:p-2.5 rounded-lg bg-[#14171F] border border-[#1E222B] text-primary">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-bold text-[#F2F2F0]">
                                                {item.domain}
                                            </h3>
                                        </div>
                                        <span className="font-mono text-xs text-[#7E8492]">
                                            {item.number}
                                        </span>
                                    </div>

                                    <p className="text-xs sm:text-sm text-[#8A8F98] leading-relaxed mb-4 sm:mb-6">
                                        {item.summary}
                                    </p>
                                </div>

                                <div className="pt-3 sm:pt-4 border-t border-[#1E222B]/60">
                                    <div className="font-mono text-[10px] text-[#7E8492] uppercase tracking-wider mb-2 sm:mb-2.5 flex items-center gap-1.5">
                                        <Layers className="w-3 h-3 text-primary" />
                                        <span>Core Stack & Methodologies</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#14171F] border border-[#1E222B] text-[11px] sm:text-xs font-mono text-[#F2F2F0]/90"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
