"use client"

import { motion } from "framer-motion"
import { Users, HeartHandshake, Compass } from "lucide-react"

export function Leadership() {
    const items = [
        {
            title: "Executive Committee, Infocomm (Robotics) Club",
            description: "Mentored junior students and guided them in robotics design, programming, and competition strategies. Facilitated knowledge passing and team leadership.",
            icon: Users
        },
        {
            title: "Community Service & VIA",
            description: "Accumulated 39 total community service hours across 4 years. Actively participated in values-in-action activities to give back to the society.",
            icon: HeartHandshake
        },
        {
            title: "Outdoor Education & Resilience",
            description: "Participated in the MOE-OBS Challenge Programme, Kayaking expeditions, and multiple Learning Journeys, fostering teamwork and physical endurance.",
            icon: Compass
        }
    ]

    return (
        <section id="leadership" className="py-24 bg-card/5 border-t border-border/10">
            <div className="container px-4 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership & Service</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-12"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    {items.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-background border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col items-start shadow-sm"
                            >
                                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
