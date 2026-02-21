import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer id="contact" className="bg-background border-t border-border/50 py-12 md:py-16">
            <div className="container px-4 mx-auto flex flex-col items-center justify-center text-center">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground mb-8 max-w-[500px]">
                    Currently open to freelance opportunities, hackathons, and innovative projects. Let&apos;s build something amazing together.
                </p>

                <div className="flex items-center gap-6 mb-12">
                    <Link href="https://github.com/Arjundevjha" target="_blank" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/arjun-dev-jha/" target="_blank" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:arjun.dev.jha@example.com" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                        <Mail className="w-6 h-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>

                <div className="w-full max-w-[400px] h-[1px] bg-border mb-8"></div>

                <blockquote className="text-xl italic font-medium text-primary mb-4 select-none">
                    &quot;Knowledge belongs to the world.&quot;
                </blockquote>

                <p className="text-sm text-muted-foreground mt-4">
                    © {new Date().getFullYear()} Arjun Dev Jha. Built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    )
}
