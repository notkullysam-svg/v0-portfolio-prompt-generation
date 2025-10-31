"use client"

import { Code2, Database, Zap } from "lucide-react"

export function Skills() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    Backend: ["Python", "C++", "Node.js", "SQL"],
    Database: ["SQL", "Database Design", "Query Optimization", "Data Modeling"],
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-balance">Skills & Expertise</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => {
            const icons = [
              <Code2 key="code" className="w-6 h-6" />,
              <Zap key="zap" className="w-6 h-6" />,
              <Database key="db" className="w-6 h-6" />,
            ]
            return (
              <div
                key={category}
                className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{icons[idx]}</div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((skill) => (
                    <li key={skill} className="text-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
