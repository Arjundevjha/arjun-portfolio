"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Terminal } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface ImageModalProps {
    images: string[]
    title: string
    isOpen: boolean
    onClose: () => void
}

export function ImageModal({ images, title, isOpen, onClose }: ImageModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }, [images.length])

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, [images.length])

    useEffect(() => {
        if (!isOpen) {
            setCurrentIndex(0)
            return
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowLeft") handlePrev()
            if (e.key === "ArrowRight") handleNext()
        }

        document.addEventListener("keydown", handleKeyDown)
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = ""
        }
    }, [isOpen, onClose, handlePrev, handleNext])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-[#08090A]/95 backdrop-blur-lg" />

                    {/* Content Frame */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative max-w-4xl w-full max-h-[90vh] bg-[#0F1115] border border-[#1E222B] rounded-2xl p-4 sm:p-6 flex flex-col items-center shadow-[0_24px_64px_rgba(0,0,0,0.9)] z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Bar */}
                        <div className="w-full flex items-center justify-between pb-3.5 mb-3 border-b border-[#1E222B]">
                            <div className="flex items-center gap-2 font-mono text-xs text-[#8A8F98]">
                                <Terminal className="w-3.5 h-3.5 text-primary" />
                                <span className="text-[#F2F2F0] font-medium truncate max-w-[260px] sm:max-w-md">
                                    {title}
                                </span>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg text-[#8A8F98] hover:text-[#F2F2F0] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Image Viewer Container with Inner Matte Frame */}
                        <div className="relative w-full flex items-center justify-center min-h-[280px] max-h-[68vh] p-1 sm:p-2 rounded-xl bg-[#14171F] border border-[#1E222B]">
                            {images.length > 1 && (
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-3 z-30 bg-[#08090A]/90 hover:bg-primary hover:text-[#08090A] border border-[#1E222B] text-[#F2F2F0] rounded-full p-2.5 transition-all shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    aria-label="Previous artifact"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                            )}

                            <div className="relative w-full aspect-[4/3] max-h-[64vh] rounded-lg overflow-hidden flex items-center justify-center">
                                <Image
                                    src={images[currentIndex]}
                                    alt={`${title} - view ${currentIndex + 1}`}
                                    fill
                                    className="object-contain rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 850px"
                                    priority
                                />
                            </div>

                            {images.length > 1 && (
                                <button
                                    onClick={handleNext}
                                    className="absolute right-3 z-30 bg-[#08090A]/90 hover:bg-primary hover:text-[#08090A] border border-[#1E222B] text-[#F2F2F0] rounded-full p-2.5 transition-all shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    aria-label="Next artifact"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Footer Indicator & Pagination */}
                        <div className="w-full flex items-center justify-between pt-3 mt-2 border-t border-[#1E222B]/60 font-mono text-xs text-[#7E8492]">
                            <div className="hidden sm:block">
                                KEYBOARD NAV: [ESC] CLOSE · [← / →] PREV/NEXT
                            </div>

                            {images.length > 1 && (
                                <div className="flex items-center gap-1.5 mx-auto sm:mx-0">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary ${
                                                idx === currentIndex
                                                    ? "bg-primary w-5"
                                                    : "bg-[#1E222B] hover:bg-[#8A8F98] w-2"
                                            }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            <div>
                                {currentIndex + 1} / {images.length}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
