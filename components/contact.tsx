"use client"

import { Mail } from "lucide-react"
import { SocialIcons } from "./social-icons"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold text-balance">Let's Connect</h2>

        <p className="text-lg text-foreground/70">
          Interested in collaborating on civic tech projects or discussing how to build meaningful solutions? I'd love
          to hear from you.
        </p>

        <div className="flex flex-col gap-6 items-center">
          <a
            href="mailto:sam2k9655@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>

          <SocialIcons />
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-foreground/50">Designed & developed with creativity and code</p>
        </div>
      </div>
    </section>
  )
}
