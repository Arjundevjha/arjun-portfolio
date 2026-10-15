"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowUpRight,
    ImageIcon,
    Sparkles,
    FolderGit2,
    Shield,
    Code,
    Cpu,
    Calculator,
    Network,
    Layers,
    ChevronLeft,
    ChevronRight,
    Maximize2,
} from "lucide-react"
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
    diagramLink?: string
    tags: string[]
    images?: string[]
    imageCaptions?: string[]
    featured?: boolean
}

const CRYPTO_DIAGRAM_IMAGE =
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/cryptography-architecture-diagram.png"

const CRYPTO_GALLERY_IMAGES = [
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-lobby.png",
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-enigma-workbench.png",
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-rsa-vault.png",
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-classical.png",
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-historical.png",
    "https://github.com/Arjundevjha/Cryptography/releases/download/v1.0.0-assets/museum-2d-floorplan.png",
]

const CRYPTO_GALLERY_TITLES = [
    "Grand Entrance Rotunda & Statues",
    "3D WWII Enigma Rotor Workbench",
    "RSA Vault Prime Factor Rings",
    "Classical Ciphers Wing Exhibits",
    "Historical Systems Wing Exhibits",
    "Interactive 2D Blueprint Floorplan",
]

const projects: Project[] = [
    {
        id: "01",
        title: "Cryptography Museum & Algorithmic Engine",
        category: "SECURITY",
        badge: "Flagship 3D WebGL & Cryptography",
        description:
            "Interactive 3D WebGL digital museum and Python cryptographic engine featuring radial exhibit rooms, real-time cipher workbenches, spatial audio, and mathematically verified classical through modern encryption algorithms.",
        longDescription:
            "Full-stack cyber & mathematics system with Three.js WebGL spatial engine, FastAPI microservices, 791 passing Python unit tests, 10.00/10 Pylint score, and automated GitDiagram architectural verification.",
        link: "https://github.com/Arjundevjha/Cryptography",
        githubName: "Cryptography",
        diagramLink: "https://gitdiagram.com/arjundevjha/cryptography",
        tags: [
            "Three.js",
            "WebGL",
            "FastAPI",
            "Python",
            "Next.js",
            "AES / RSA / Enigma",
            "GitDiagram",
            "Mathematics",
        ],
        images: [
            CRYPTO_DIAGRAM_IMAGE,
            ...CRYPTO_GALLERY_IMAGES,
        ],
        imageCaptions: [
            "Physical System Architecture Diagram — Automated Component & Dependency Mapping by GitDiagram",
            "Grand Entrance Rotunda & Pioneer Monuments (Al-Kindi, Claude Shannon, Whitfield Diffie & Martin Hellman)",
            "Historical Systems Wing — 3D Enigma Rotor Machine & Live Interactive Steckerbrett Workbench",
            "Modern Cryptography Wing — RSA Vault Prime Rings, Keypair Generator & Encryption Engine",
            "Classical Ciphers Wing — Caesar, Affine, Vigenère, Playfair, Scytale & Polybius Exhibits",
            "Historical Systems Wing — WWII Enigma & Lorenz SZ42 Electromechanical Galleries",
            "Architectural Blueprint — Interactive 2D Museum Floorplan Map & Spatial Teleportation",
        ],
        featured: true,
    },
    {
        id: "02",
        title: "SL Symposium Chatbot",
        category: "AI & ML",
        badge: "Production GenAI System",
        description:
            "Production GenAI chatbot architected for school event enquiry management, automated schedule querying, and attendee assistance.",
        longDescription:
            "Built with React, Gemini API, and Node.js. Reviewed by Director Neena Bhalla and deployed for real event users to handle concurrent enquiry queries.",
        link: "https://github.com/Arjundevjha/sl-chatbot",
        githubName: "sl-chatbot",
        tags: ["React", "Gemini API", "Node.js", "GenAI", "REST APIs"],
        images: ["/certificates/SIL-app-demo.png", "/certificates/SIL-app-block-diagram.png"],
        imageCaptions: [
            "SL Symposium Chatbot — Production Live Event Interface & Attendee Assistance Demo",
            "SL Symposium Chatbot — Full Stack Architectural Block Diagram & API Integration",
        ],
    },
    {
        id: "03",
        title: "Sentinel Cyber Sports Day CTF",
        category: "SECURITY",
        badge: "National 2nd Runner-Up",
        description:
            "National CTF challenge organized by the Digital and Intelligence Service (DIS). Solved advanced web security, reverse engineering, binary analysis, and cryptography challenges.",
        tags: ["CTF", "Cybersecurity", "Cryptography", "Web Security", "DIS / MINDEF"],
        images: ["/certificates/Sentinel-Cyber-Sports-Day-CTF-Challenge-2026.png"],
        imageCaptions: [
            "Sentinel Cyber Sports Day CTF 2026 — National 2nd Runner-Up Certificate of Achievement",
        ],
    },
    {
        id: "04",
        title: "Full Stack Product Tool",
        category: "FULL STACK",
        badge: "Full Stack Architecture",
        description:
            "Complete product management infrastructure spanning frontend UI, backend API routing, and persistent database management.",
        link: "https://github.com/Arjundevjha/Full-Stack-Project",
        githubName: "Full-Stack-Project",
        tags: ["TypeScript", "Node.js", "Express", "Database", "React"],
    },
    {
        id: "05",
        title: "MIT Machine Learning Practicals",
        category: "AI & ML",
        badge: "ML Curriculum Practicals",
        description:
            "Supervised & unsupervised learning models, regression analytics, and classification algorithms from MIT curriculum.",
        link: "https://github.com/Arjundevjha/MIT-Practical-projects",
        githubName: "MIT-Practical-projects",
        tags: ["Python", "Scikit-Learn", "Data Science", "Pandas", "NumPy"],
    },
    {
        id: "06",
        title: "Hawker Centre Finder",
        category: "FULL STACK",
        badge: "Community Swift App",
        description:
            "Accessibility-first community application built for the elderly to navigate and discover nearby hawker centres. SWIFT Explorer finalist.",
        tags: ["Swift", "iOS", "Accessibility", "UI/UX", "Maps API"],
        images: ["/certificates/swift-app-demo.png"],
        imageCaptions: [
            "Hawker Centre Finder — Accessibility-First iOS Application Demo for Elderly Navigation",
        ],
    },
    {
        id: "07",
        title: "Mathematics & Algorithmic Archive",
        category: "MATH & ROBOTICS",
        badge: "Algorithmic Archive",
        description:
            "Compendium of Olympiad math theorems, numerical methods, and algorithmic problem-solving routines encoded in software.",
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
    const [modalCaptions, setModalCaptions] = useState<string[] | undefined>(undefined)
    const [modalInitialIndex, setModalInitialIndex] = useState(0)

    const [featuredTab, setFeaturedTab] = useState<"diagram" | "gallery">("diagram")
    const [galleryIdx, setGalleryIdx] = useState(0)

    const filteredProjects = projects.filter(
        (p) => activeCategory === "ALL" || p.category === activeCategory
    )

    const featuredProject = projects.find((p) => p.featured)

    const handleViewImages = (project: Project, startIndex = 0) => {
        if (!project.images || project.images.length === 0) return
        setModalImages(project.images)
        setModalTitle(project.title)
        setModalCaptions(project.imageCaptions)
        setModalInitialIndex(startIndex)
        setModalOpen(true)
    }

    const handleGalleryPrev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setGalleryIdx((prev) => (prev === 0 ? CRYPTO_GALLERY_IMAGES.length - 1 : prev - 1))
    }

    const handleGalleryNext = (e: React.MouseEvent) => {
        e.stopPropagation()
        setGalleryIdx((prev) => (prev === CRYPTO_GALLERY_IMAGES.length - 1 ? 0 : prev + 1))
    }

    return (
        <section id="projects" className="py-16 sm:py-24 border-b border-[#1E222B]/60 scroll-mt-20">
            <div className="container px-4 mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="font-mono text-xs text-primary font-bold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                            03
                        </span>
                        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#F2F2F0]">
                            Projects
                        </h2>
                    </div>

                    {/* Category Filter Pills (Horizontal scroll on mobile, wrap on desktop) */}
                    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0F1115] border border-[#1E222B] overflow-x-auto no-scrollbar max-w-full">
                        {categories.map(({ label, icon: Icon }) => {
                            const isSelected = activeCategory === label
                            return (
                                <button
                                    key={label}
                                    onClick={() => setActiveCategory(label)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                                        isSelected
                                            ? "bg-primary text-[#08090A] font-bold shadow-sm"
                                            : "text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5 active:bg-white/10"
                                    }`}
                                >
                                    <Icon className="w-3.5 h-3.5 shrink-0" />
                                    <span>{label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Featured Project Big Block (Shown if in ALL or the project's category) */}
                {featuredProject && (activeCategory === "ALL" || activeCategory === featuredProject.category) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 sm:mb-12 bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 relative overflow-hidden transition-all group"
                    >
                        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch lg:items-center">
                            {/* Left Meta & Content */}
                            <div className="flex-1 space-y-3.5 sm:space-y-4">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 font-bold">
                                        FEATURED FLAGSHIP WORK
                                    </span>
                                    <span className="font-mono text-xs text-[#7E8492]">
                                        01 // SECURITY & 3D WEBGL
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#F2F2F0] tracking-tight group-hover:text-primary transition-colors">
                                    {featuredProject.title}
                                </h3>

                                <p className="text-xs sm:text-base text-[#8A8F98] leading-relaxed">
                                    {featuredProject.description}
                                </p>

                                <p className="text-xs text-[#8A8F98] font-mono border-l-2 border-primary/40 pl-3 py-1">
                                    {featuredProject.longDescription}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                                    {featuredProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#14171F] border border-[#1E222B] text-[11px] sm:text-xs font-mono text-[#8A8F98]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4">
                                    <button
                                        onClick={() => handleViewImages(featuredProject, 0)}
                                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-[#08090A] font-semibold text-xs hover:bg-primary/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
                                    >
                                        <Maximize2 className="w-4 h-4 shrink-0" />
                                        <span>Inspect Exhibits & Architecture (7)</span>
                                    </button>

                                    {featuredProject.diagramLink && (
                                        <Link
                                            href={featuredProject.diagramLink}
                                            target="_blank"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-primary/30 hover:border-primary text-primary text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
                                        >
                                            <Network className="w-3.5 h-3.5 text-primary shrink-0" />
                                            <span>Live GitDiagram</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                                        </Link>
                                    )}

                                    {featuredProject.link && (
                                        <Link
                                            href={featuredProject.link}
                                            target="_blank"
                                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#14171F] hover:bg-[#1A1E27] border border-[#1E222B] hover:border-primary/40 text-[#F2F2F0] text-xs font-mono transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[44px]"
                                        >
                                            <span>GitHub Codebase</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-primary shrink-0" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Right Physical Media & Architecture Showcase Box */}
                            <div className="w-full lg:w-[480px] shrink-0 flex flex-col gap-2">
                                {/* Mode Switcher Tabs */}
                                <div className="flex items-center gap-1 p-1 rounded-xl bg-[#14171F] border border-[#1E222B] font-mono text-[11px]">
                                    <button
                                        type="button"
                                        onClick={() => setFeaturedTab("diagram")}
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all ${
                                            featuredTab === "diagram"
                                                ? "bg-primary text-[#08090A] font-bold shadow-sm"
                                                : "text-[#8A8F98] hover:text-[#F2F2F0]"
                                        }`}
                                    >
                                        <Network className="w-3.5 h-3.5 shrink-0" />
                                        <span>Architecture Diagram</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFeaturedTab("gallery")}
                                        className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg transition-all ${
                                            featuredTab === "gallery"
                                                ? "bg-primary text-[#08090A] font-bold shadow-sm"
                                                : "text-[#8A8F98] hover:text-[#F2F2F0]"
                                        }`}
                                    >
                                        <Layers className="w-3.5 h-3.5 shrink-0" />
                                        <span>3D Museum Photos ({CRYPTO_GALLERY_IMAGES.length})</span>
                                    </button>
                                </div>

                                {/* Active Frame Viewport */}
                                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-[#1E222B] bg-[#08090A] relative group/showcase flex items-center justify-center">
                                    {featuredTab === "diagram" && (
                                        <button
                                            type="button"
                                            onClick={() => handleViewImages(featuredProject, 0)}
                                            className="w-full h-full relative cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary p-2 flex items-center justify-center bg-[#F3F0E6]"
                                            aria-label="Inspect physical architecture diagram"
                                        >
                                            <Image
                                                src={CRYPTO_DIAGRAM_IMAGE}
                                                alt="Physical GitDiagram System Architecture"
                                                fill
                                                unoptimized
                                                className="object-contain p-2 group-hover/showcase:scale-[1.02] transition-transform duration-300"
                                            />
                                            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#08090A]/90 border border-white/10 font-mono text-[10px] text-primary flex items-center gap-1.5 shadow-lg">
                                                <Network className="w-3 h-3 text-primary" />
                                                <span>GITDIAGRAM ARCHITECTURE</span>
                                            </div>
                                            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded bg-[#08090A]/90 border border-white/10 font-mono text-[10px] text-[#F2F2F0] flex items-center gap-1.5 shadow-lg">
                                                <Maximize2 className="w-3 h-3 text-primary" />
                                                <span>CLICK TO EXPAND</span>
                                            </div>
                                        </button>
                                    )}

                                    {featuredTab === "gallery" && (
                                        <div className="w-full h-full relative group/gal">
                                            <button
                                                type="button"
                                                onClick={() => handleViewImages(featuredProject, galleryIdx + 1)}
                                                className="w-full h-full relative cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary block"
                                                aria-label={`Inspect ${CRYPTO_GALLERY_TITLES[galleryIdx]}`}
                                            >
                                                <Image
                                                    src={CRYPTO_GALLERY_IMAGES[galleryIdx]}
                                                    alt={CRYPTO_GALLERY_TITLES[galleryIdx]}
                                                    fill
                                                    unoptimized
                                                    className="object-cover group-hover/gal:scale-105 transition-transform duration-500 opacity-95 group-hover/gal:opacity-100"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#08090A] via-transparent to-transparent opacity-60"></div>
                                            </button>

                                            {/* Top Badge */}
                                            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-[#08090A]/90 border border-white/10 font-mono text-[10px] text-primary flex items-center gap-1.5 shadow-lg pointer-events-none">
                                                <ImageIcon className="w-3 h-3" />
                                                <span className="truncate max-w-[240px]">
                                                    {CRYPTO_GALLERY_TITLES[galleryIdx]}
                                                </span>
                                            </div>

                                            {/* Nav Arrows */}
                                            <button
                                                type="button"
                                                onClick={handleGalleryPrev}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#08090A]/90 hover:bg-primary hover:text-[#08090A] border border-[#1E222B] text-[#F2F2F0] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10"
                                                aria-label="Previous exhibit photo"
                                            >
                                                <ChevronLeft className="w-4 h-4" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={handleGalleryNext}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-[#08090A]/90 hover:bg-primary hover:text-[#08090A] border border-[#1E222B] text-[#F2F2F0] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10"
                                                aria-label="Next exhibit photo"
                                            >
                                                <ChevronRight className="w-4 h-4" />
                                            </button>

                                            {/* Bottom Counter */}
                                            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded bg-[#08090A]/90 border border-white/10 font-mono text-[10px] text-[#F2F2F0] flex items-center gap-1.5 shadow-lg pointer-events-none">
                                                <span className="text-primary font-bold">
                                                    {galleryIdx + 1}
                                                </span>
                                                <span className="text-[#8A8F98]">/ {CRYPTO_GALLERY_IMAGES.length}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Editorial Project Grid */}
                <div
                    className={
                        filteredProjects.filter(
                            (p) =>
                                !p.featured ||
                                (activeCategory !== "ALL" && activeCategory !== p.category)
                        ).length === 1
                            ? "grid grid-cols-1 max-w-2xl mx-auto gap-4 sm:gap-6"
                            : "grid md:grid-cols-2 gap-4 sm:gap-6"
                    }
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects
                            .filter(
                                (p) =>
                                    !p.featured ||
                                    (activeCategory !== "ALL" && activeCategory !== p.category)
                            )
                            .map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#0F1115] border border-[#1E222B] hover:border-primary/40 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all group"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                                            <span className="font-mono text-xs text-[#7E8492]">
                                                {project.id} // {project.category}
                                            </span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#14171F] border border-[#1E222B] text-[#8A8F98] truncate max-w-[170px]">
                                                {project.badge}
                                            </span>
                                        </div>

                                        <h4 className="text-lg sm:text-xl font-bold text-[#F2F2F0] mb-2 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>

                                        <p className="text-xs sm:text-sm text-[#8A8F98] leading-relaxed mb-4 sm:mb-6">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6 pt-3 sm:pt-4 border-t border-[#1E222B]/60">
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
                                        <div className="flex flex-wrap xs:flex-nowrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                                            {project.images && project.images.length > 0 ? (
                                                <button
                                                    onClick={() => handleViewImages(project, 0)}
                                                    className="inline-flex items-center gap-1.5 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1 min-h-[36px]"
                                                >
                                                    <ImageIcon className="w-3.5 h-3.5" />
                                                    <span>View Demo / Slides</span>
                                                </button>
                                            ) : (
                                                <span className="text-[#7E8492] py-1 text-[11px]">
                                                    CODEBASE ARCHIVE
                                                </span>
                                            )}

                                            <div className="flex items-center gap-2">
                                                {project.diagramLink && (
                                                    <Link
                                                        href={project.diagramLink}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1 text-primary hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1 min-h-[36px]"
                                                    >
                                                        <span>Diagram</span>
                                                        <ArrowUpRight className="w-3 h-3 text-primary" />
                                                    </Link>
                                                )}

                                                {project.link && (
                                                    <Link
                                                        href={project.link}
                                                        target="_blank"
                                                        className="inline-flex items-center gap-1 text-[#8A8F98] hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded py-1 min-h-[36px]"
                                                    >
                                                        <span>{project.githubName}</span>
                                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                                    </Link>
                                                )}
                                            </div>
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
                captions={modalCaptions}
                initialIndex={modalInitialIndex}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </section>
    )
}
