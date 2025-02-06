"use client";
import { motion } from 'framer-motion';
import { SectionContainer } from './atoms/SectionContainer';
import { HeroHighlight, Highlight } from './ui/HeroHighlight';

const Hero = () => {
    return (
        <SectionContainer id="hero">
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: [20, -5, 0], }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                    className="text-2xl px-4 font-bold  max-w-4xl leading-relaxed lg:leading-snug text-start mx-auto"
                >
                    Hi,
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: [20, -5, 0], }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                    className="text-3xl px-4 font-bold max-w-4xl leading-relaxed lg:leading-snug text-start mx-auto"
                >
                    I&apos;m Riyaz Pasha Mohammed
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: [20, -5, 0], }}
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1], }}
                    className="text-3xl px-4 font-bold max-w-4xl leading-relaxed lg:leading-snug text-start mx-auto"
                >
                    <Highlight className="text-black dark:text-white">
                        Full Stack Engineer
                    </Highlight>
                </motion.h1>
            </HeroHighlight>
        </SectionContainer>
    )
}

export default Hero;
