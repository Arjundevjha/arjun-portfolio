"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen } from "lucide-react"

const oLevelGrades = [
    { subject: "English", grade: "A2", color: "from-emerald-400 to-emerald-600" },
    { subject: "Elementary Mathematics", grade: "A1", color: "from-amber-400 to-amber-600" },
    { subject: "Additional Mathematics", grade: "A2", color: "from-emerald-400 to-emerald-600" },
    { subject: "Pure Physics", grade: "A2", color: "from-sky-400 to-sky-600" },
    { subject: "Pure Chemistry", grade: "A2", color: "from-violet-400 to-violet-600" },
    { subject: "Pure Biology", grade: "B3", color: "from-teal-400 to-teal-600" },
    { subject: "Combined Humanities (SS + Elective Geography)", grade: "A1", color: "from-rose-400 to-rose-600" },
    { subject: "Hindi", grade: "B3", color: "from-orange-400 to-orange-600" },
]

export function Education() {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Current School */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative bg-background border border-primary/30 p-6 md:p-8 rounded-2xl shadow-sm hover:border-primary/60 transition-all duration-300 group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                                <GraduationCap className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Current</div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">Anderson Serangoon Junior College</h3>
                                <p className="text-muted-foreground font-medium mt-1">JC1 &bull; 2026 – Present</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Previous School */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative bg-background border border-border/50 p-6 md:p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-all duration-300 group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-[120px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="bg-secondary/20 p-3 rounded-xl shrink-0">
                                <School className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Graduated</div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground">St. Hilda&apos;s Secondary School</h3>
                                <p className="text-muted-foreground font-medium mt-1">Secondary 1 – 4 &bull; 2022 – 2025</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* O-Level Results */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">GCE O-Level Results</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {oLevelGrades.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                                className="relative bg-card/30 border border-border/50 p-5 rounded-xl hover:border-primary/40 transition-all duration-300 group overflow-hidden"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <span className="text-sm font-medium text-muted-foreground leading-tight flex-1 pr-3">
                                        {item.subject}
                                    </span>
                                    <span className={`text-2xl font-black bg-gradient-to-br ${item.color} bg-clip-text text-transparent shrink-0`}>
                                        {item.grade}
                                    </span>
                                </div>
                                <div className="w-full h-1 bg-border/50 rounded-full overflow-hidden">
                                    <motion.div
                                        className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: item.grade.startsWith("A") ? "100%" : "75%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
