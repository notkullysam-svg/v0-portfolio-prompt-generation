"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-primary font-semibold text-lg">Hey there, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Sam C</h1>
            <p className="text-2xl text-secondary font-semibold">Full Stack Developer</p>
          </div>

          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
            I build web applications that solve real-world problems. Passionate about combining creative thinking with
            solid engineering to create meaningful impact.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-72 h-80 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ring-4 ring-primary/30">
              <Image src="/profile.jpg" alt="Sam C - Full Stack Developer" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
