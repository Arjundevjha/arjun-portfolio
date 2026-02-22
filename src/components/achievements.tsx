"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Target, Trophy, Medal } from "lucide-react"
import { ImageModal } from "@/components/image-modal"

interface AchievementItem {
    title: string
    images?: string[]
}

const timeline: { year: string; icon: typeof Trophy; items: AchievementItem[] }[] = [
    {
        year: "2025",
        icon: Trophy,
        items: [
            { title: "SMO Senior Bronze Award", images: ["/certificates/SMO-senior-bronze-award-2025.png"] },
            { title: "Singapore Informatics League Bronze Award", images: ["/certificates/Singapore Informatics League-bronze.png"] },
            { title: "Singapore Junior Chemistry Olympiad", images: ["/certificates/Singapore-Junior-Chemistry-Olympiad-participation-2025.png"] },
            { title: "STEM Challenge Merit Award", images: ["/certificates/STEM-Challenge-St-hildas-secondary-school-interclass-merit-award-2025.png"] },
            { title: "Edusave Certificate of Academic Achievement", images: ["/certificates/Edusave-cert-of-academic-achievement-2025.png"] },
            { title: "Bedok CCC Education Merit Award", images: ["/certificates/Bedok CCC Education Merit award-2025.png"] },
            { title: "NOI December Training 2025", images: ["/certificates/NOI-Dec_course-Training.png"] }
        ]
    },
    {
        year: "2024",
        icon: Medal,
        items: [
            { title: "World Robot Games Top 16 (International)", images: ["/certificates/WRG-cert-participation.png"] },
            { title: "SWIFT Explorer Merit Award (Finalist)", images: ["/certificates/swift-app-demo.png"] },
            { title: "3D Printing Drone Airframe Cover Competition", images: ["/certificates/3D Printing Drone Airfrae competition-cert-participation.png"] },
            { title: "ISP 'B' Div Handball 3rd Place" },
            { title: "Edusave Good Progress Award & Academic Achievement", images: ["/certificates/Edusave-good-progress-2024.png", "/certificates/Edusave-cert-of-academic-achievement-2024.png"] },
            { title: "SMO Senior Participation", images: ["/certificates/SMO-senior-participation-2024.png"] },
            { title: "Barclays Finance Club Programme", images: ["/certificates/Nellie-Mittchell-talent-development-programme-mathematics-barclays-bank-2024.png"] }
        ]
    },
    {
        year: "2023",
        icon: Target,
        items: [
            { title: "SMO Junior Honourable Mention", images: ["/certificates/SMO-junior-honourable-mention-2023.png"] },
            { title: "NRC CoderZ Top 8 Team & Top 5 Individual", images: ["/certificates/NRC-cert-participation.png"] },
            { title: "Edusave Good Progress Award", images: ["/certificates/Edusave-good-progress-2023.png"] },
            { title: "MIT Data Science & ML Certificate", images: ["/certificates/MIT-cert.png"] },
            { title: "Full Stack Web Development Certificate", images: ["/certificates/full-stack-cert.png"] }
        ]
    },
    {
        year: "2022",
        icon: Award,
        items: [
            { title: "Siglap Edusave Awards Ceremony" },
            { title: "IIT Jodhpur Cybersecurity: Cyber Samurai Certificate", images: ["/certificates/IIT-samuri-defensive-security.png"] },
            { title: "IIT Jodhpur Cybersecurity: Cyber Guru Certificate", images: ["/certificates/IIT-guru-offensive-security.png"] }
        ]
    }
]

export function Achievements() {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalImages, setModalImages] = useState<string[]>([])
    const [modalTitle, setModalTitle] = useState("")

    const handleItemClick = (item: AchievementItem) => {
        if (!item.images || item.images.length === 0) return
        setModalImages(item.images)
        setModalTitle(item.title)
        setModalOpen(true)
    }

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
                                    {block.items.map((item, idx) => {
                                        const hasImage = item.images && item.images.length > 0
                                        return (
                                            <div
                                                key={idx}
                                                onClick={() => handleItemClick(item)}
                                                className={`bg-card/30 border border-border/50 p-4 rounded-xl flex items-start gap-3 transition-all duration-300 ${hasImage
                                                        ? "cursor-pointer hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)] group"
                                                        : ""
                                                    }`}
                                            >
                                                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${hasImage ? "bg-primary" : "bg-muted-foreground/50"}`}></div>
                                                <span className="text-foreground/90 font-medium leading-snug flex-1">
                                                    {item.title}
                                                </span>
                                                {hasImage && (
                                                    <span className="text-xs text-primary/60 group-hover:text-primary transition-colors mt-1 shrink-0">
                                                        View ↗
                                                    </span>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            <ImageModal
                images={modalImages}
                title={modalTitle}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </section>
    )
}
