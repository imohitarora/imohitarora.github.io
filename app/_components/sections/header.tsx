"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Profile } from '@/types';

const MotionImage = motion.create(Image);

interface HeaderSectionProps {
    profile: Pick<Profile, 'name' | 'title'>;
    avatarUrl: string;
}

export function HeaderSection({ profile, avatarUrl }: HeaderSectionProps) {
    return (
        <motion.section
            aria-label="header"
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div className="flex w-full justify-between gap-4 items-center">
                <div>
                    <motion.h1
                        className="font-bold mb-2 text-4xl sm:text-5xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello 👋🏼 from {profile.name.split(' ')[0]}
                    </motion.h1>
                    <motion.h3
                        className="sm:text-xl text-muted-foreground text-base font-medium"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {profile.title}
                    </motion.h3>
                </div>
                <MotionImage
                    width={80}
                    height={80}
                    src={avatarUrl}
                    alt={`${profile.name}'s Avatar`}
                    className="rounded-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                />
            </motion.div>
        </motion.section>
    );
}