import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
    onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
    return (
        <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full w-full flex flex-col items-center justify-center relative p-6 select-none overflow-hidden"
        >
            <div
                className="absolute inset-0 pointer-events-none -z-10"
                style={{
                    background: "radial-gradient(circle at center, rgba(127, 94, 184, 0.18) 0%, rgba(2, 6, 23, 0) 70%)"
                }}
            />

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-24 h-24 rounded-3xl bg-gradient-to-br from-amethyst-400 via-amethyst-500 to-amethyst-700 p-[2px] shadow-xl shadow-amethyst-500/20 mb-10"
            >
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center border border-white/10">
                    <Sparkles className="w-12 h-12 text-amethyst-400" />
                </div>
            </motion.div>

            <motion.h1
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="text-5xl md:text-6xl font-extrabold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-amethyst-300"
            >
                Привет! Как дела?
            </motion.h1>

            <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-4 text-slate-400 text-center max-w-md text-lg leading-relaxed"
            >
                Я <span className="font-semibold text-amethyst-400">Metior</span> — твой кристальный AI-помощник.
            </motion.p>

            <motion.button
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                onClick={onStart}
                className="mt-10 group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-semibold text-lg text-white bg-gradient-to-r from-amethyst-700 via-amethyst-500 to-amethyst-400 shadow-lg shadow-amethyst-500/25 cursor-pointer hover:shadow-amethyst-500/40 transition-shadow"
            >
                <span>Начать работу</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
        </motion.div>
    );
};