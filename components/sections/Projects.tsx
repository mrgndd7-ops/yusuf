"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projeler" className="relative bg-[var(--color-bg-2)] section-py">
      <div className="container-x">
        <SectionTitle
          eyebrow="Projeler & Süreç"
          title="Ruhsattan iskana, anahtar teslim her aşamada Yusuf İnşaat."
          subtitle="İstanbul Eyüpsultan, Sultangazi, Sultanbeyli ve Yeşilpınar başta olmak üzere; ruhsatlı projelerden iskan sürecine, tamamlanmış konutlardan iç mekan ince işlerine kadar her aşamada şeffaf, belgeli ve denetlenebilir bir süreç."
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
