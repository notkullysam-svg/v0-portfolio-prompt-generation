"use client"

import { CheckCircle2, Users, TrendingUp, AlertCircle } from "lucide-react"

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Featured Project</h2>

        <div className="bg-background rounded-2xl p-8 md:p-12 border border-border">
          <div className="space-y-8">
            {/* Project Title */}
            <div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Civic Tech
              </div>
              <h3 className="text-4xl font-bold mb-4">Fix It Force</h3>
              <p className="text-foreground/70 text-lg">
                A web platform empowering citizens to report infrastructure issues and hold local officials accountable
                for timely resolution.
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <AlertCircle className="text-secondary w-5 h-5" />
                  The Problem
                </h4>
                <p className="text-foreground/70">
                  Citizens in villages and cities lack access to essential services—improper roads with potholes, broken
                  drainage systems, inadequate water facilities, and missing public toilets. There's no effective way to
                  report these issues or track accountability.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  The Solution
                </h4>
                <p className="text-foreground/70">
                  A transparent platform where citizens report infrastructure problems, share with the public, and tag
                  local officials. Officials are scored based on completion time, creating accountability and
                  incentivizing faster resolution of community needs.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Key Features</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-5 h-5 text-primary" />
                    <h5 className="font-semibold">Community Reporting</h5>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Citizens can report issues with location, photos, and details for accountability.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <h5 className="font-semibold">Official Scoring</h5>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Officials tracked by completion rates with public visibility of performance.
                  </p>
                </div>

                <div className="p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <h5 className="font-semibold">Progress Tracking</h5>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Real-time updates on resolution status with transparency for all stakeholders.
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "SQL", "Web Development", "Full Stack", "Database Design"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
