"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink, FolderGit2 } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "SL Symposium Chatbot",
        description: "Gen AI chatbot (React + Gemini API + Node.js) for school event enquiry management.",
        link: "https://github.com/Arjundevjha/sl-chatbot",
        githubName: "sl-chatbot",
    },
    {
        title: "Full Stack App",
        description: "Product management tool — complete frontend, backend, and DB infrastructure.",
        link: "https://github.com/Arjundevjha/Full-Stack-Project",
        githubName: "Full-Stack-Project",
    },
    {
        title: "MIT AI/ML Projects",
        description: "Machine Learning & data analysis practicals from MIT curriculum.",
        link: "https://github.com/Arjundevjha/MIT-Practical-projects",
        githubName: "MIT-Practical-projects",
    },
    {
        title: "Cryptography Archive",
        description: "Comprehensive implementation of classical to modern cryptography methods.",
        link: "https://github.com/Arjundevjha/Cryptography",
        githubName: "Cryptography",
    },
    {
        title: "Hawker Center Finder",
        description: "Community app for the elderly to find hawker centres. Created for the SWIFT Explorer challenge.",
    },
    {
        title: "InsurTech AI Agent",
        description: "Agentic AI architecture design for an insurance technology platform.",
    },
    {
        title: "Mathematics Archive",
        description: "Ongoing compendium of maths concepts & formulae encoded in software.",
        link: "https://github.com/Arjundevjha/Math",
        githubName: "Math",
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="container px-4 mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group h-full"
                        >
                            <Card className="h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <CardHeader>
                                    <div className="flex justify-between items-start mb-4 text-primary">
                                        <FolderGit2 className="w-10 h-10 stroke-[1.5]" />
                                        {project.link && (
                                            <Link href={project.link} target="_blank" className="hover:text-foreground transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        )}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {project.link && (
                                        <div className="mt-auto pt-4 border-t border-border/50 flex justify-start items-center">
                                            <Link href={project.link} target="_blank" className="text-xs font-mono text-muted-foreground flex items-center gap-1 hover:text-primary transition-colors">
                                                <ExternalLink className="w-3 h-3" />
                                                {project.githubName}
                                            </Link>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
