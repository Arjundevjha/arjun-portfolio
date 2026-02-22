"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
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
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors z-10"
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        {/* Title */}
                        <h3 className="text-white font-semibold text-lg mb-4 text-center px-4">
                            {title}
                        </h3>

                        {/* Image */}
                        <div className="relative w-full flex items-center justify-center">
                            {images.length > 1 && (
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            )}

                            <div className="relative w-full aspect-[4/3] max-h-[70vh]">
                                <Image
                                    src={images[currentIndex]}
                                    alt={title}
                                    fill
                                    className="object-contain rounded-lg"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    priority
                                />
                            </div>

                            {images.length > 1 && (
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            )}
                        </div>

                        {/* Pagination dots */}
                        {images.length > 1 && (
                            <div className="flex gap-2 mt-4">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                                ? "bg-white w-6"
                                                : "bg-white/40 hover:bg-white/60"
                                            }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
