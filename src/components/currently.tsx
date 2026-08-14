"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, Sparkles, Compass, CheckCircle2, Award } from "lucide-react"

const oLevelSubjects = [
    { subject: "Elementary Mathematics", grade: "A1", distinction: true },
    { subject: "Combined Humanities (SS/Geog)", grade: "A1", distinction: true },
    { subject: "Additional Mathematics", grade: "A2", distinction: true },
    { subject: "Pure Physics", grade: "A2", distinction: true },
    { subject: "Pure Chemistry", grade: "A2", distinction: true },
    { subject: "English Language", grade: "A2", distinction: true },
    { subject: "Pure Biology", grade: "B3", distinction: false },
    { subject: "Hindi", grade: "B3", distinction: false },
]

export function Currently() {
    return (
        <section id="now" className="py-20 border-b border-[#1E222B]/60 relative">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            01
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Currently & Academic Foundation
                        </h2>
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-[#555B66]">
                        LIVE_STATUS: ACTIVE
                    </span>
                </div>

                {/* 4-Item Realtime Status & Academics Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {/* Card 1: Anderson Serangoon JC */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 p-6 sm:p-7 rounded-2xl relative group transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2.5 rounded-xl bg-[#14171F] border border-[#1E222B] text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                                CURRENT JC1
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">
                            Anderson Serangoon Junior College
                        </h3>
                        <p className="font-mono text-xs text-[#8A8F98] mb-4">
                            2026 – Present · Singapore
                        </p>

                        <div className="space-y-3">
                            <div className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider">
                                Current Coursework (PCME):
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#F2F2F0]">
                                    H2 Physics
                                </span>
                                <span className="px-2.5 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#F2F2F0]">
                                    H2 Chemistry
                                </span>
                                <span className="px-2.5 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#F2F2F0]">
                                    H2 Mathematics
                                </span>
                                <span className="px-2.5 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#F2F2F0]">
                                    H1 Economics
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: St. Hilda's Secondary School */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 p-6 sm:p-7 rounded-2xl relative group transition-colors"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-2.5 rounded-xl bg-[#14171F] border border-[#1E222B] text-primary">
                                <School className="w-6 h-6" />
                            </div>
                            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#14171F] text-[#8A8F98] border border-[#1E222B]">
                                GRADUATED 2025
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-[#F2F2F0] mb-1">
                            St. Hilda&apos;s Secondary School
                        </h3>
                        <p className="font-mono text-xs text-[#8A8F98] mb-4">
                            Secondary 1 – 4 (2022 – 2025)
                        </p>

                        <div className="space-y-3">
                            <div className="font-mono text-xs text-[#8A8F98] uppercase tracking-wider">
                                GCE O-Level Scores:
                            </div>
                            <div className="flex flex-wrap items-center gap-2.5">
                                <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/30 flex items-center gap-1.5 font-mono text-xs text-primary font-bold">
                                    <Award className="w-3.5 h-3.5" />
                                    <span>RAW L1R5: 10</span>
                                </div>
                                <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/30 flex items-center gap-1.5 font-mono text-xs text-primary font-bold">
                                    <Award className="w-3.5 h-3.5" />
                                    <span>NETT L1R5: 8</span>
                                </div>
                                <div className="px-3 py-1 rounded-md bg-[#14171F] border border-[#1E222B] font-mono text-xs text-[#8A8F98]">
                                    6 Distinctions (A1/A2)
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Clean Subject Distinctions Grid without Linear Bars */}
                <div className="bg-[#0F1115]/50 border border-[#1E222B] rounded-2xl p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1E222B]">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-[#F2F2F0]">
                                Verified GCE O-Level Subject Results
                            </h4>
                        </div>
                        <span className="font-mono text-xs text-[#8A8F98]">
                            8 Subjects Taken
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {oLevelSubjects.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#14171F] border border-[#1E222B] hover:border-primary/30 p-3.5 rounded-xl flex items-center justify-between transition-colors"
                            >
                                <span className="text-xs text-[#8A8F98] font-medium truncate mr-2">
                                    {item.subject}
                                </span>
                                <span
                                    className={`font-mono text-sm font-bold px-2 py-0.5 rounded ${
                                        item.distinction
                                            ? "text-primary bg-primary/10 border border-primary/20"
                                            : "text-[#F2F2F0] bg-white/5 border border-white/10"
                                    }`}
                                >
                                    {item.grade}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real-time Focus Tracks */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="bg-[#0F1115] border border-[#1E222B] p-5 rounded-xl flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#14171F] text-primary shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-primary font-bold mb-1">
                                [ ACTIVE_BUILD ]
                            </div>
                            <p className="text-xs text-[#8A8F98] leading-relaxed">
                                Developing autonomous agentic workflows with Gemini API, applied cybersecurity payloads, and full-stack software systems.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#0F1115] border border-[#1E222B] p-5 rounded-xl flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#14171F] text-primary shrink-0 mt-0.5">
                            <Compass className="w-4 h-4" />
                        </div>
                        <div>
                            <div className="font-mono text-xs text-primary font-bold mb-1">
                                [ OPEN_SOURCE_CONTRIBUTIONS ]
                            </div>
                            <p className="text-xs text-[#8A8F98] leading-relaxed">
                                Actively open to contributing to open-source initiatives, tooling repositories, and collaborative engineering in Artificial Intelligence and Cybersecurity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
