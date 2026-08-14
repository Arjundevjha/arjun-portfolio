"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ImageIcon, Sparkles, FolderGit2, Shield, Code, Cpu, Calculator } from "lucide-react"
import { ImageModal } from "@/components/image-modal"
import Image from "next/image"
import Link from "next/link"

type Category = "ALL" | "AI & ML" | "SECURITY" | "FULL STACK" | "MATH & ROBOTICS"

interface Project {
    id: string
    title: string
    category: Category
    badge: string
    description: string
    longDescription?: string
    link?: string
    githubName?: string
    tags: string[]
    images?: string[]
    featured?: boolean
}

const projects: Project[] = [
    {
        id: "01",
        title: "SL Symposium Chatbot",
        category: "AI & ML",
        badge: "Production GenAI System",
        description: "Production GenAI chatbot architected for school event enquiry management, automated schedule querying, and attendee assistance.",
        longDescription: "Built with React, Gemini API, and Node.js. Reviewed by Director Neena Bhalla and deployed for real event users to handle concurrent enquiry queries.",
        link: "https://github.com/Arjundevjha/sl-chatbot",
        githubName: "sl-chatbot",
        tags: ["React", "Gemini API", "Node.js", "GenAI", "REST APIs"],
        images: ["/certificates/SIL-app-demo.png", "/certificates/SIL-app-block-diagram.png"],
        featured: true,
    },
    {
        id: "02",
        title: "Cryptography Archive",
        category: "SECURITY",
        badge: "Security & Mathematics",
        description: "Comprehensive implementation of classical ciphers to modern mathematical encryption techniques encoded in software.",
        link: "https://github.com/Arjundevjha/Cryptography",
        githubName: "Cryptography",
        tags: ["Python", "Cryptography", "Algorithms", "Mathematics"],
    },
    {
        id: "03",
        title: "Full Stack Product Tool",
        category: "FULL STACK",
        badge: "Full Stack Architecture",
        description: "Complete product management infrastructure spanning frontend UI, backend API routing, and persistent database management.",
        link: "https://github.com/Arjundevjha/Full-Stack-Project",
        githubName: "Full-Stack-Project",
        tags: ["TypeScript", "Node.js", "Express", "Database", "React"],
    },
    {
        id: "04",
        title: "MIT Machine Learning Practicals",
        category: "AI & ML",
        badge: "ML Curriculum Practicals",
        description: "Supervised & unsupervised learning models, regression analytics, and classification algorithms from MIT curriculum.",
        link: "https://github.com/Arjundevjha/MIT-Practical-projects",
        githubName: "MIT-Practical-projects",
        tags: ["Python", "Scikit-Learn", "Data Science", "Pandas", "NumPy"],
    },
    {
        id: "05",
        title: "Hawker Centre Finder",
        category: "FULL STACK",
        badge: "Community Swift App",
        description: "Accessibility-first community application built for the elderly to navigate and discover nearby hawker centres. SWIFT Explorer finalist.",
        tags: ["Swift", "iOS", "Accessibility", "UI/UX", "Maps API"],
        images: ["/certificates/swift-app-demo.png"],
    },
    {
        id: "06",
        title: "Mathematics & Algorithmic Archive",
        category: "MATH & ROBOTICS",
        badge: "Algorithmic Archive",
        description: "Compendium of Olympiad math theorems, numerical methods, and algorithmic problem-solving routines encoded in software.",
        link: "https://github.com/Arjundevjha/Math",
        githubName: "Math",
        tags: ["Python", "Olympiad Math", "Number Theory", "Combinatorics"],
    },
]

const categories: { label: Category; icon: typeof Code }[] = [
    { label: "ALL", icon: FolderGit2 },
    { label: "AI & ML", icon: Sparkles },
    { label: "SECURITY", icon: Shield },
    { label: "FULL STACK", icon: Code },
    { label: "MATH & ROBOTICS", icon: Calculator },
]

export function Projects() {
    const [activeCategory, setActiveCategory] = useState<Category>("ALL")
    const [modalOpen, setModalOpen] = useState(false)
    const [modalImages, setModalImages] = useState<string[]>([])
    const [modalTitle, setModalTitle] = useState("")

    const filteredProjects = projects.filter(
        (p) => activeCategory === "ALL" || p.category === activeCategory
    )

    const featuredProject = projects.find((p) => p.featured)

    const handleViewImages = (project: Project) => {
        if (!project.images || project.images.length === 0) return
        setModalImages(project.images)
        setModalTitle(project.title)
        setModalOpen(true)
    }

    return (
        <section id="work" className="py-24 border-b border-[#1E222B]/60">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            02
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Selected Work & Systems
                        </h2>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0F1115] border border-[#1E222B]">
                        {categories.map(({ label, icon: Icon }) => {
                            const isSelected = activeCategory === label
                            return (
                                <button
                                    key={label}
                                    onClick={() => setActiveCategory(label)}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                                        isSelected
                                            ? "bg-primary text-[#08090A] font-bold shadow-sm"
                                            : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5"
                                    }`}
                                >
                                    <Icon className="w-3 h-3" />
                                    <span>{label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Featured Project Big Block (Shown if in ALL or AI & ML) */}
                {featuredProject && (activeCategory === "ALL" || activeCategory === "AI & ML") && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-3xl p-6 sm:p-10 relative overflow-hidden transition-all group"
                    >
                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            {/* Left Meta & Content */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
                                        FEATURED WORK
                                    </span>
                                    <span className="font-mono text-xs text-[#555B66]">
                                        01 // PRODUCTION
                                    </span>
                                </div>

                                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#F2F2F0] tracking-tight group-hover:text-primary transition-colors">
                                    {featuredProject.title}
                                </h3>

                                <p className="text-sm sm:text-base text-[#8A8F98] leading-relaxed">
                                    {featuredProject.description}
                                </p>

                                <p className="text-xs text-[#8A8F98] font-mono border-l-2 border-primary/40 pl-3 py-1">
                                    {featuredProject.longDescription}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {featuredProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 rounded-md bg-[#14171F] border border-[#1E222B] text-xs font-mono text-[#8A8F98]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-3 pt-4">
                                    {featuredProject.images && (
                                        <button
                                            onClick={() => handleViewImages(featuredProject)}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-[#08090A] font-semibold text-xs hover:bg-primary/90 transition-all"
                                        >
                                            <ImageIcon className="w-3.5 h-3.5" />
                                            <span>Inspect Architecture & Demo</span>
                                        </button>
                                    )}

                                    {featuredProject.link && (
                                        <Link
                                            href={featuredProject.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/40 text-[#F2F2F0] text-xs font-mono transition-all"
                                        >
                                            <span>GitHub Codebase</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Right Visual Frame */}
                            {featuredProject.images && featuredProject.images[0] && (
                                <div
                                    onClick={() => handleViewImages(featuredProject)}
                                    className="w-full lg:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#1E222B] bg-[#14171F] relative group/img cursor-pointer shrink-0"
                                >
                                    <Image
                                        src={featuredProject.images[0]}
                                        alt={featuredProject.title}
                                        fill
                                        className="object-cover group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#08090A]/90 border border-white/10 font-mono text-[10px] text-primary flex items-center gap-1.5">
                                        <ImageIcon className="w-3 h-3" />
                                        <span>CLICK TO PREVIEW</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Editorial Project Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects
                            .filter((p) => !p.featured || (activeCategory !== "ALL" && activeCategory !== "AI & ML"))
                            .map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="font-mono text-xs text-[#555B66]">
                                                {project.id} // {project.category}
                                            </span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#14171F] border border-[#1E222B] text-[#8A8F98]">
                                                {project.badge}
                                            </span>
                                        </div>

                                        <h4 className="text-xl font-bold text-[#F2F2F0] mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>

                                        <p className="text-xs sm:text-sm text-[#8A8F98] leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-[#1E222B]/60">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-[#14171F] border border-[#1E222B] text-[11px] font-mono text-[#8A8F98]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Footer Actions */}
                                        <div className="flex items-center justify-between font-mono text-xs">
                                            {project.images && project.images.length > 0 ? (
                                                <button
                                                    onClick={() => handleViewImages(project)}
                                                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                                                >
                                                    <ImageIcon className="w-3.5 h-3.5" />
                                                    <span>View Demo / Slides</span>
                                                </button>
                                            ) : (
                                                <span className="text-[#555B66]">CODEBASE ARCHIVE</span>
                                            )}

                                            {project.link && (
                                                <Link
                                                    href={project.link}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-1 text-[#8A8F98] hover:text-primary transition-colors"
                                                >
                                                    <span>{project.githubName}</span>
                                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
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
