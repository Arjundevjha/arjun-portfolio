"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Terminal, Cpu, Database, Brain, Shield, Rocket } from "lucide-react"

const skills = [
    { name: "Python", icon: Terminal },
    { name: "JavaScript", icon: Code2 },
    { name: "Full Stack (React, Node.js)", icon: Database },
    { name: "Generative AI / Agentic AI", icon: Brain },
    { name: "Robot Design & Algorithmic Thinking", icon: Cpu },
    { name: "Offensive Cybersecurity / Pentesting", icon: Shield },
    { name: "Data Analytics & Machine Learning", icon: Brain },
    { name: "CI/CD with GitHub", icon: Rocket },
    { name: "Payload Design (Python, Shell)", icon: Terminal },
    { name: "Spike Prime Block Coding", icon: Code2 },
]

export function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } }
    }

    return (
        <section id="skills" className="py-24 bg-secondary/5">
            <div className="container px-4 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Skills</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    {skills.map((skill, index) => {
                        const Icon = skill.icon
                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Badge variant="outline" className="px-6 py-3 text-sm md:text-base border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-3 rounded-full cursor-default">
                                    <Icon className="w-5 h-5 text-primary" />
                                    <span className="font-medium text-foreground/90">{skill.name}</span>
                                </Badge>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
