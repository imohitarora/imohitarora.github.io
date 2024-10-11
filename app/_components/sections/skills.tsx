"use client"

import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

interface SkillsSectionProps {
    skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <motion.section
            aria-label="skills"
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <motion.h3 className="text-xl sm:text-2xl font-bold mb-3">Skills</motion.h3>
            <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill) => (
                    <Badge
                        variant="secondary"
                        key={skill}
                        className="cursor-pointer text-xs"
                    >
                        {skill}
                    </Badge>
                ))}
            </div>
        </motion.section>
    );
}