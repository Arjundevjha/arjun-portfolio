"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Award, Target, Star, ChevronDown, ChevronUp, ImageIcon, ArrowUpRight } from "lucide-react"
import { ImageModal } from "@/components/image-modal"

interface Milestone {
    year: string
    title: string
    category: string
    description: string
    highlight?: boolean
    images?: string[]
}

const timelineData: {
    year: string
    tag: string
    milestones: Milestone[]
}[] = [
    {
        year: "2026",
        tag: "COMPETITIVE INFORMATICS & JC",
        milestones: [
            {
                year: "2026",
                title: "National Olympiad in Informatics (NOI)",
                category: "Competitive Programming",
                description: "National algorithmic programming competition solving advanced graph theory and dynamic programming challenges.",
                highlight: true,
                images: ["/certificates/NOI-2026-cert-participation.png"],
            },
            {
                year: "2026",
                title: "Canadian Computing Competition (CCC)",
                category: "Informatics",
                description: "International competition administered by the University of Waterloo.",
                images: ["/certificates/CCC-2026-cert-participation.png"],
            },
        ],
    },
    {
        year: "2025",
        tag: "OLYMPIADS & ACADEMIC PEAK",
        milestones: [
            {
                year: "2025",
                title: "Singapore Mathematical Olympiad (SMO) Senior Bronze",
                category: "Mathematics",
                description: "Recognized among the top mathematics students nationally.",
                highlight: true,
                images: ["/certificates/SMO-senior-bronze-award-2025.png"],
            },
            {
                year: "2025",
                title: "Singapore Informatics League Bronze Award",
                category: "Informatics",
                description: "Team and individual competitive algorithmic programming.",
                highlight: true,
                images: ["/certificates/Singapore Informatics League-bronze.png"],
            },
            {
                year: "2025",
                title: "Singapore Junior Chemistry Olympiad (SJChO)",
                category: "Natural Sciences",
                description: "Advanced theory and experimental problem solving.",
                images: ["/certificates/Singapore-Junior-Chemistry-Olympiad-participation-2025.png"],
            },
            {
                year: "2025",
                title: "STEM Challenge Merit Award (Inter-class)",
                category: "Engineering",
                description: "Design and construction of applied engineering solutions.",
                images: ["/certificates/STEM-Challenge-St-hildas-secondary-school-interclass-merit-award-2025.png"],
            },
            {
                year: "2025",
                title: "Edusave Academic Achievement & Bedok CCC Merit Award",
                category: "Academic",
                description: "Top scholastic achievement recognition.",
                images: [
                    "/certificates/Edusave-cert-of-academic-achievement-2025.png",
                    "/certificates/Bedok CCC Education Merit award-2025.png",
                ],
            },
            {
                year: "2025",
                title: "NOI December Training 2025",
                category: "Informatics Training",
                description: "Intensive training camp for competitive algorithmic contest preparation.",
                images: ["/certificates/NOI-Dec_course-Training.png"],
            },
        ],
    },
    {
        year: "2024",
        tag: "INTERNATIONAL ROBOTICS & LEADERSHIP",
        milestones: [
            {
                year: "2024",
                title: "World Robot Games (WRG) International Top 16",
                category: "Robotics",
                description: "Autonomous robotics competition competing against international teams.",
                highlight: true,
                images: ["/certificates/WRG-cert-participation.png"],
            },
            {
                year: "2024",
                title: "SWIFT Explorer Merit Award Finalist",
                category: "App Development",
                description: "Elderly hawker centre assistant app built for iOS.",
                images: ["/certificates/swift-app-demo.png"],
            },
            {
                year: "2024",
                title: "Infocomm (Robotics) Club Exco & 39 VIA Community Hours",
                category: "Leadership & Service",
                description: "Mentored junior students and organized team training.",
            },
            {
                year: "2024",
                title: "3D Printing Drone Airframe Competition",
                category: "CAD & Prototyping",
                description: "Custom CAD aerodynamic drone housing fabrication.",
                images: ["/certificates/3D Printing Drone Airfrae competition-cert-participation.png"],
            },
            {
                year: "2024",
                title: "Barclays Finance Club Programme & SMO Participation",
                category: "Quantitative Math",
                description: "Financial mathematics and quantitative thinking program.",
                images: [
                    "/certificates/Nellie-Mittchell-talent-development-programme-mathematics-barclays-bank-2024.png",
                    "/certificates/SMO-senior-participation-2024.png",
                ],
            },
        ],
    },
    {
        year: "2023",
        tag: "NATIONAL ROBOTICS & FULL-STACK DEVELOPMENT",
        milestones: [
            {
                year: "2023",
                title: "NRC CoderZ Top 8 National Team & Top 5 Individual",
                category: "Robotics Simulation",
                description: "National Robotics Competition virtual algorithmic navigation challenge.",
                highlight: true,
                images: ["/certificates/NRC-cert-participation.png"],
            },
            {
                year: "2023",
                title: "SMO Junior Honourable Mention",
                category: "Mathematics",
                description: "Singapore Mathematical Olympiad junior category.",
                images: ["/certificates/SMO-junior-honourable-mention-2023.png"],
            },
            {
                year: "2023",
                title: "MIT Machine Learning & Full Stack Certifications",
                category: "Computer Science",
                description: "Data science and web system architecture practical courses.",
                images: ["/certificates/MIT-cert.png", "/certificates/full-stack-cert.png"],
            },
        ],
    },
    {
        year: "2022",
        tag: "CYBERSECURITY CERTIFICATIONS & ROOTS",
        milestones: [
            {
                year: "2022",
                title: "IIT Jodhpur: Cyber Samurai (Defensive Security)",
                category: "Cybersecurity",
                description: "Network defense, hardening, cryptography, and traffic analysis.",
                highlight: true,
                images: ["/certificates/IIT-samuri-defensive-security.png"],
            },
            {
                year: "2022",
                title: "IIT Jodhpur: Cyber Guru (Offensive Security)",
                category: "Cybersecurity",
                description: "Ethical hacking, payload crafting, and vulnerability exploitation.",
                highlight: true,
                images: ["/certificates/IIT-guru-offensive-security.png"],
            },
        ],
    },
]

export function Journey() {
    const [selectedYear, setSelectedYear] = useState<string>("ALL")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalImages, setModalImages] = useState<string[]>([])
    const [modalTitle, setModalTitle] = useState("")
    const [expandedArchive, setExpandedArchive] = useState(false)

    const handleViewCert = (item: Milestone) => {
        if (!item.images || item.images.length === 0) return
        setModalImages(item.images)
        setModalTitle(item.title)
        setModalOpen(true)
    }

    const filteredTimeline =
        selectedYear === "ALL"
            ? timelineData
            : timelineData.filter((t) => t.year === selectedYear)

    return (
        <section id="journey" className="py-24 border-b border-[#1E222B]/60 relative">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            05
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Evolutionary Journey & Archive
                        </h2>
                    </div>

                    {/* Quick Year Filters with Touch-Friendly Hitboxes */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0F1115] border border-[#1E222B] overflow-x-auto max-w-full">
                        {["ALL", "2026", "2025", "2024", "2023", "2022"].map((yr) => (
                            <button
                                key={yr}
                                onClick={() => setSelectedYear(yr)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                    selectedYear === yr
                                        ? "bg-primary text-[#08090A] font-bold shadow-sm"
                                        : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5"
                                }`}
                            >
                                {yr}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Flow */}
                <div className="space-y-12 relative border-l border-[#1E222B] ml-4 sm:ml-6 pl-6 sm:pl-8">
                    {filteredTimeline.map((block, bIdx) => (
                        <motion.div
                            key={block.year}
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                            transition={{ duration: 0.4, delay: bIdx * 0.1 }}
                            className="relative"
                        >
                            {/* Marker */}
                            <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 h-6 w-6 rounded-full bg-[#08090A] border-2 border-primary flex items-center justify-center shadow-[0_0_12px_rgba(183,255,60,0.4)]">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>

                            {/* Year Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <h3 className="text-2xl sm:text-3xl font-mono font-black text-[#F2F2F0]">
                                    {block.year}
                                </h3>
                                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#14171F] border border-[#1E222B] text-primary font-medium">
                                    {block.tag}
                                </span>
                            </div>

                            {/* Milestones in this year */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                {block.milestones.map((item, mIdx) => {
                                    const hasCert = item.images && item.images.length > 0
                                    return (
                                        <div
                                            key={mIdx}
                                            role={hasCert ? "button" : undefined}
                                            tabIndex={hasCert ? 0 : undefined}
                                            aria-label={hasCert ? `View certificate for ${item.title}` : undefined}
                                            onKeyDown={(e) => {
                                                if (hasCert && (e.key === "Enter" || e.key === " ")) {
                                                    e.preventDefault()
                                                    handleViewCert(item)
                                                }
                                            }}
                                            onClick={() => hasCert && handleViewCert(item)}
                                            className={`bg-[#0F1115] border border-[#1E222B] p-5 rounded-xl flex flex-col justify-between transition-all text-left ${
                                                hasCert
                                                    ? "cursor-pointer hover:border-primary/50 hover:bg-[#14171F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
                                                    : ""
                                            } ${item.highlight ? "ring-1 ring-primary/20" : ""}`}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-mono text-[10px] text-[#7E8492] uppercase">
                                                        {item.category}
                                                    </span>
                                                    {hasCert && (
                                                        <span className="font-mono text-[10px] text-primary group-hover:underline flex items-center gap-1">
                                                            <ImageIcon className="w-3 h-3" />
                                                            <span>VERIFY CERT ↗</span>
                                                        </span>
                                                    )}
                                                </div>

                                                <h4 className="text-sm sm:text-base font-bold text-[#F2F2F0] group-hover:text-primary transition-colors mb-2">
                                                    {item.title}
                                                </h4>

                                                <p className="text-xs text-[#8A8F98] leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ImageModal
                images={modalImages}
                title={modalTitle}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </section>
    )
}
