"use client"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-balance">About Me</h2>

        <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
          <p>
            I'm a full stack developer passionate about creating solutions that make a real difference in people's
            lives. My journey started with a simple belief: technology can bridge the gap between communities and the
            services they deserve.
          </p>

          <p>
            With expertise in Python, C++, and SQL, I combine strong backend fundamentals with modern web development
            practices. I love turning complex problems into elegant, user-friendly applications that solve actual pain
            points.
          </p>

          <p>
            Fix It Force is my flagship project—a platform born from frustration with infrastructure neglect. It
            represents my commitment to civic tech and creating tools that hold systems accountable while empowering
            citizens.
          </p>

          <p>
            When I'm not coding, I'm exploring new technologies, thinking about how to make systems more transparent,
            and dreaming up the next big idea that could improve communities.
          </p>
        </div>
      </div>
    </section>
  )
}
