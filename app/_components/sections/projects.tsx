"use client"

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ProjectCard } from '../project-card';

interface ProjectsSectionProps {
    projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <motion.section
            aria-label="projects"
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h3 className="text-3xl font-bold">Projects</motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </motion.section>
    );
}