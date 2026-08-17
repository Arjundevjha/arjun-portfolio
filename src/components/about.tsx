"use client"

import { motion } from "framer-motion"
import { Quote, ArrowDown, Terminal } from "lucide-react"

const trajectory = [
    { label: "Robotics Roots", detail: "Age 7 · LEGO EV3 Mechanics" },
    { label: "Algorithmic Code", detail: "Python, C++, Contest Math" },
    { label: "Full-Stack Software", detail: "React, APIs, Distributed Systems" },
    { label: "AI & Cybersecurity", detail: "LLMs, Pentesting, Gemini Tooling" },
    { label: "Intelligent Systems", detail: "JC1 · Autonomous Agents" },
]

export function About() {
    return (
        <section id="about" className="py-24 border-b border-[#1E222B]/60 relative">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            06
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            About & Engineering Narrative
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#7E8492]">
                        ORIGIN // TRAJECTORY
                    </span>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Narrative Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                        transition={{ duration: 0.4 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="bg-[#0F1115] border border-[#1E222B] p-6 sm:p-8 rounded-2xl space-y-5">
                            <p className="text-base sm:text-lg text-[#F2F2F0] font-medium leading-relaxed">
                                I started building with LEGO Mindstorms robotics at <span className="text-primary font-bold">age 7</span>.
                            </p>

                            <p className="text-sm sm:text-base text-[#8A8F98] leading-relaxed">
                                What began as mechanical gear ratios evolved over the past decade into a sustained obsession with complex computing systems: from Olympiad mathematics and offensive web security to building production agentic AI tools with the Gemini API.
                            </p>

                            <div className="py-2">
                                <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2">
                                    // Core Guiding Question
                                </div>
                                <p className="text-lg sm:text-xl font-bold text-[#F2F2F0] border-l-2 border-primary pl-4 py-1">
                                    How can intelligent technology solve problems that actually matter in society?
                                </p>
                            </div>

                            <p className="text-xs sm:text-sm text-[#8A8F98] leading-relaxed font-mono">
                                Currently based in Singapore · JC1 at Anderson Serangoon Junior College · Dedicated to self-learning, security research, and open knowledge sharing.
                            </p>
                        </div>

                        {/* JCB Quote */}
                        <div className="bg-[#0F1115] border border-[#1E222B] p-6 rounded-2xl flex items-start gap-4">
                            <Quote className="w-8 h-8 text-primary/60 shrink-0 mt-1" />
                            <div>
                                <blockquote className="text-base sm:text-lg font-medium italic text-[#F2F2F0] mb-2">
                                    &quot;Knowledge belongs to the world.&quot;
                                </blockquote>
                                <div className="font-mono text-xs text-[#8A8F98]">
                                    — Sir Jagdish Chandra Bose (Guiding Inspiration)
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Technical Trajectory Flowchart */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="lg:col-span-5 bg-[#0F1115] border border-[#1E222B] p-6 sm:p-7 rounded-2xl"
                    >
                        <div className="flex items-center gap-2 mb-6 font-mono text-xs text-[#8A8F98] pb-3 border-b border-[#1E222B]">
                            <Terminal className="w-3.5 h-3.5 text-primary" />
                            <span>ENGINEERING_TRAJECTORY</span>
                        </div>

                        <div className="space-y-4 relative">
                            {trajectory.map((step, idx) => (
                                <div key={idx} className="relative">
                                    <div className="bg-[#14171F] border border-[#1E222B] hover:border-primary/40 p-3.5 rounded-xl transition-colors">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-mono text-xs text-primary font-bold">
                                                0{idx + 1} // {step.label}
                                            </span>
                                        </div>
                                        <div className="font-mono text-xs text-[#8A8F98]">
                                            {step.detail}
                                        </div>
                                    </div>
                                    {idx < trajectory.length - 1 && (
                                        <div className="flex justify-center py-1 text-[#7E8492]">
                                            <ArrowDown className="w-3.5 h-3.5 text-primary/60" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
