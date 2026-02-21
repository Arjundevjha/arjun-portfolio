"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-lg text-muted-foreground"
                    >
                        <p>
                            My journey into technology began at age 7 with Lego EV3 robotics. What started as building simple mechanisms evolved into a deep, sustained passion for solving complex problems. Over the years, I&apos;ve expanded my horizons from block coding into <strong className="text-foreground">Full-Stack Development, Cybersecurity, and Artificial Intelligence</strong>.
                        </p>
                        <p>
                            As a student at St. Hilda&apos;s Secondary School, I&apos;ve driven initiatives in the Infocomm (Robotics) Club and actively contributed to real-world freelance projects—from performing web penetration tests to architecting Gen AI chatbots using the Gemini API.
                        </p>
                        <p>
                            My core philosophy hinges on three pillars: <strong className="text-primary tracking-wide">Self-learning, Knowledge-sharing, and Community Impact</strong>. I believe that technology is a tool meant to empower people and bridge gaps in society.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
                        <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-xl">
                            <Quote className="h-12 w-12 text-primary/40 mb-6" />
                            <blockquote className="text-2xl md:text-3xl font-medium leading-tight mb-6 text-foreground">
                                &quot;Knowledge belongs to the world.&quot;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-bold text-xl">
                                    JCB
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Jagdish Chandra Bose</div>
                                    <div className="text-sm text-primary">A guiding inspiration</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
