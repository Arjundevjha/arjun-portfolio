"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
    "Keen to acquire new knowledge, does not hesitate to seek clarification",
    "Great depth of Mathematics knowledge which he shares with peers",
    "Guides classmates in their studies; vocal in class discussions",
    "Quiet determination to excel. Constantly strives to achieve high standards in whatever he sets out to do."
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <section id="testimonials" className="py-24 relative overflow-hidden bg-primary/5">
            <div className="container px-4 mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Words from Mentors</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4"></div>
                    <p className="text-muted-foreground">Feedback from teachers (2022–2025)</p>
                </motion.div>

                <div className="relative bg-card/50 backdrop-blur-md border border-primary/20 p-8 md:p-16 rounded-3xl shadow-lg mt-12 min-h-[250px] flex items-center justify-center">
                    <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20 rotate-180" />
                    <Quote className="absolute bottom-8 right-8 w-12 h-12 text-primary/20" />

                    <button onClick={prev} className="absolute left-2 md:left-4 p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="max-w-[80%] mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                                transition={{ duration: 0.4 }}
                                className="text-xl md:text-3xl font-medium leading-relaxed text-foreground italic"
                            >
                                &quot;{testimonials[currentIndex]}&quot;
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <button onClick={next} className="absolute right-2 md:right-4 p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-6" : "bg-primary/30"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
