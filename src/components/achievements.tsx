"use client"

import { motion } from "framer-motion"
import { Award, Target, Trophy, Medal } from "lucide-react"

const timeline = [
    {
        year: "2025",
        icon: Trophy,
        items: [
            "SMO Senior Bronze Award",
            "Singapore Informatics League Bronze Award",
            "Singapore Junior Chemistry Olympiad",
            "STEM Challenge Merit Award",
            "Edusave Certificate of Academic Achievement",
            "Bedok CCC Education Merit Award"
        ]
    },
    {
        year: "2024",
        icon: Medal,
        items: [
            "World Robot Games Top 16 (International)",
            "SWIFT Explorer Merit Award (Finalist)",
            "ISP 'B' Div Handball 3rd Place",
            "Edusave Good Progress Award & Academic Achievement",
            "Barclays Finance Club Programme"
        ]
    },
    {
        year: "2023",
        icon: Target,
        items: [
            "SMO Junior Honourable Mention",
            "NRC CoderZ Top 8 Team & Top 5 Individual",
            "MIT Data Science & ML Certificate",
            "Full Stack Web Development Certificate"
        ]
    },
    {
        year: "2022",
        icon: Award,
        items: [
            "IIT Jodhpur Cybersecurity: Cyber Samurai Certificate",
            "IIT Jodhpur Cybersecurity: Cyber Guru Certificate"
        ]
    }
]

export function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Milestones & Achievements</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 pl-8 md:pl-12 space-y-16">
                    {timeline.map((block, i) => {
                        const Icon = block.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[45px] md:-left-[61px] top-0 bg-background border-2 border-primary rounded-full p-2 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>

                                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-6 -mt-2">
                                    {block.year}
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {block.items.map((item, idx) => (
                                        <div key={idx} className="bg-card/30 border border-border/50 p-4 rounded-xl flex items-start gap-3 hover:border-primary/30 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                            <span className="text-foreground/90 font-medium leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
