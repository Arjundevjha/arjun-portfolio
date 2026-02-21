"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, ShieldCheck, BrainCircuit, Lightbulb } from "lucide-react"

const experiences = [
    {
        role: "AI App Development",
        company: "Analytics Resource",
        date: "May 2025",
        icon: BrainCircuit,
        description: "Built and deployed a Gen AI chatbot for school event enquiry management with teammate Aarav Rastogi. The codebase was reviewed by the director and hosted in production.",
        reference: "Reference: Neena Bhalla, Director."
    },
    {
        role: "Agentic AI Consultation",
        company: "InsurTech Company",
        date: "2024 - 2025",
        icon: Lightbulb,
        description: "Advised on AI agent architecture design for an insurance technology platform, focusing on enhancing user interactions and automation."
    },
    {
        role: "Web Penetration Test",
        company: "Baskit.app",
        date: "Mar 2023",
        icon: ShieldCheck,
        description: "Conducted a full pentest on an e-commerce web app. Identified vulnerabilities, documented findings securely, and recommended technical fixes.",
        reference: "Reference: Yann B. Schuermans, Founder."
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-card/10">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Industry Experience</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, i) => {
                        const Icon = exp.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative bg-background border border-border/50 p-6 md:p-8 rounded-2xl shadow-sm hover:border-primary/50 transition-colors group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
                                <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                    <div className="bg-primary/10 p-4 rounded-xl shrink-0 mt-1">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                            <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                                <Calendar className="w-4 h-4" />
                                                {exp.date}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-medium mb-4">
                                            <Building2 className="w-4 h-4" />
                                            {exp.company}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed mb-3">
                                            {exp.description}
                                        </p>
                                        {exp.reference && (
                                            <p className="text-sm font-medium text-foreground/80 border-l-2 border-primary/50 pl-3">
                                                {exp.reference}
                                            </p>
                                        )}
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
