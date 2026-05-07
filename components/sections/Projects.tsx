"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projeler" className="bg-[var(--color-bg)] section-py">
      <div className="container-x">
        <SectionTitle
          title="Projelerimiz"
          subtitle="İstanbul'un dört bir yanında hayata geçirdiğimiz seçili projeler."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
